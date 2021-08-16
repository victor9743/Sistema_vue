import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/login/login.vue'
import pg_incial from '../views/pg_inicial/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/principal',
    name: 'principal',
    component: pg_incial
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
