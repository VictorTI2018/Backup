import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Agendar from '../views/Agendar'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/faca-sua-inscricao',
    name: 'faca-sua-inscricao',
    component: Agendar,
  },
  {
    path: '/',
    redirect: '/faca-sua-inscricao'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
