import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/CommonLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/goal',
      },
      {
        path: '/goal',
        component: () => import('@/pages/Goal/index.vue'),
      },
      
      {
        path: '/abstract',
        component: () => import('@/pages/Abstract/index.vue')
      },
      {
        path: '/user',
        component: () => import('@/pages/User/index.vue'),
      },
      {
        path: '/task',
        component: () => import('@/pages/Task/index.vue'),
      },
    ],
  },
  {
    path:'/error',
    component:() => import('@/pages/ErrorPage/index.vue')
  },
  {
    path: '/goal/:id',
    component: () => import('@/pages/Goal/components/GoalDetail.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
