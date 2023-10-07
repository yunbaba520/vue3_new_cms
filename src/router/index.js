import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/index.vue'),
      children: [
        {
          path: '/',
          redirect: '/main/welcome'
        },
        {
          path: 'welcome',
          name: 'welcome',
          component: () => import('../views/main/welcome/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/error/404.vue')
    }
  ]
})

export default router
