// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from './vant-ui.config.js'
import 'swiper/dist/css/swiper.min.css'
import 'video.js/dist/video-js.css'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
store.dispatch('getNwes', axios)
router.push('/home')
