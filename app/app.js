import Vue from 'vue/dist/vue.js';
import index from './components/index.vue';

new Vue({
    el: '#do-app',
    render: h => {
        return h(index);
    },
});
