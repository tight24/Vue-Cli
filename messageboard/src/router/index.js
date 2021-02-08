import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Board from '../views/Board.vue'

Vue.use(Vuex)
Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/board',
    name:'/Board',
    component:Board
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
