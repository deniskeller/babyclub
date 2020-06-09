import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VScrollLock from 'v-scroll-lock';
import YmapPlugin from 'vue-yandex-maps';

const settings = {
    apiKey: 'a8de6779-4868-4ed7-ab49-9a8d0bb2ecc1',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
};

Vue.use(YmapPlugin, settings);

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
     container: "body",
     duration: 2000,
     easing: "ease",
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 });
 
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
Vue.use(PerfectScrollbar);

import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.config.productionTip = false;

Vue.use(VScrollLock);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
