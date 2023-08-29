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
      path: '/RootApp',
      name: 'RootApp',
      component: () => import('../views/RootApp.vue')
    },
    {
      path: '/IndependentApp',
      name: 'IndependentApp',
      component: () => import('../views/IndependentApp.vue')
    },
    {
      path: '/IntegratedApp',
      name: 'IntegratedApp',
      component: () => import('../views/IntegratedApp.vue')
    }
  ]
})

export default router
