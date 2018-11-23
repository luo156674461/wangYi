import Vue from 'vue'
import Router from 'vue-router'
import NeteHome from '../components/NeteaseRoute/NeteHome'
import NeteVideo from '../components/NeteaseRoute/NeteVideo'
import NeteLive from '../components/NeteaseRoute/NeteLive'
import NetePerson from '../components/NeteaseRoute/NetePerson'
import Already from '../components/NeteaseRoute/Already'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'Home',
    component: NeteHome
  }, {
    path: '/video',
    name: 'Video',
    component: NeteVideo
  }, {
    path: '/live',
    name: 'Live',
    component: NeteLive
  }, {
    path: '/person',
    name: 'Person',
    component: NetePerson
  }, {
    path: '/already',
    name: 'Already',
    component: Already
  }]
})
