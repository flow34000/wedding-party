import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/accommodation',
      name: 'accommodation',
      component: () => import('../views/AccomodationView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }
  }
})

export default router
