import Vue from 'vue/dist/vue.js';
import index from './components/main.vue';

new Vue({
    el: '#do-app',
    render: h => {
        return h(index);
    },
});
