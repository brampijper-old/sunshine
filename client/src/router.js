import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
