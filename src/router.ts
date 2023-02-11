import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Homepage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/online',
      component: () => import('./views/Onlinepage.vue'),
    },
    {
      path: '/offline',
      component: () => import('./views/Onlinepage.vue'),
    },
  ],
})
