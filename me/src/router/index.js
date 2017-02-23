import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/Home'
import Introduce from 'page/Introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    }
  ]
})
