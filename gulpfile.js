const gulp = require('gulp');
const gbrowserify = require('gulp-browserify');
const browserify = require('browserify');
const babelify = require("babelify");
const vueify = require('vueify')
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');

gulp.task('img', () => {
    gulp.src('./app/img/**/*.*',{base : './app'})
        .pipe(gulp.dest('./environments/development/'))
        .pipe(gulp.dest('./environments/production/'));
});

gulp.task('browserify', () =>{
    gulp.src('./app/app.js', {entry: true})
        .pipe(gbrowserify({
            transform: ['vueify','babelify']
        }))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('sass', () => {
    gulp.src('./app/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('project-file', () => {
    const projectList = [];
    const projects = fs.readdirSync('./app/projects').filter((value) => {
        return value !== '.DS_Store';
    });

    projects.forEach((project, index) => {
        const filePath = `./app/projects/${project}/details.json`;
        fs.readFile(filePath, {encoding: 'utf8'}, (err, data) => {
            if (err) { throw err; }
            projectList.push(JSON.parse(data));
            if (index == projects.length -1) { writeFile(); }
        });
    });

    const writeFile = () => {
        const string = JSON.stringify(projectList, null, '\t');
        fs.writeFile('./app/projects.json', string, function(err) {
            if (err) { throw err; }
            console.log('done');
        });
    };

});

gulp.task('watch', () => {
    gulp.watch('index.html', ['frontEnd']);
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('app/**/*.js', ['browserify']);
    gulp.watch('app/**/*.vue', ['frontEnd']);
});


gulp.task('frontEnd', ['browserify', 'sass', 'img']);
gulp.task('default',  ['browserify', 'sass', 'img', 'watch']);
