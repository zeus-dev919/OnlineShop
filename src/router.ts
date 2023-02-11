import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Homepage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    // {
    //   path: '/about',
    //   component: () => import('@/views/About.vue'),
    // },
    // {
    //   path: '/contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})
