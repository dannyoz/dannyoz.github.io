var gulp        = require('gulp');
var gbrowserify = require('gulp-browserify');
var browserify  = require('browserify');
var babelify    = require("babelify");
var vueify      = require('vueify')
var stripDebug  = require('gulp-strip-debug');
var uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var htmlmin     = require('gulp-htmlmin');

gulp.task('img',function(){
    gulp.src('./app/img/**/*.*',{base : './app'})
        .pipe(gulp.dest('./environments/development/'))
        .pipe(gulp.dest('./environments/production/'));
});

gulp.task('browserify', function () {
    gulp.src('./app/app.js', {entry: true})
        .pipe(gbrowserify({
            transform: ['vueify','babelify']
        }))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});

gulp.task('sass', function () {
    gulp.src('./app/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.html', ['frontEnd']);
    gulp.watch('app/**/*.scss', ['frontEnd']);
    gulp.watch('app/**/*.js', ['frontEnd']);
    gulp.watch('app/**/*.vue', ['frontEnd']);
    gulp.watch('app/**/*.jsx', ['frontEnd']);
});

gulp.task('frontEnd', ['browserify', 'sass', 'img']);
gulp.task('default',  ['browserify', 'sass', 'img', 'watch']);
