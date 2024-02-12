import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StatsView from '../views/StatsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stats-result',
      name: 'stats',
      component: StatsView
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }
  }
})

export default router
