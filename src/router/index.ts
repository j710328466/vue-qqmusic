import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layout/BaseLayout.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      children: [
        {
          path: '/',
          redirect: '/home',
          // 只有经过身份验证的用户才能创建帖子
          // meta: { requiresAuth: true }
        },
        {
          path: 'home',
          component: HomeView,
          // 只有经过身份验证的用户才能创建帖子
          // meta: { requiresAuth: true }
        },
        {
          path: '/singer',
          name: 'singer',
          component: () => import('../views/SInger/index.vue')
          // 只有经过身份验证的用户才能创建帖子
          // meta: { requiresAuth: true }
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
