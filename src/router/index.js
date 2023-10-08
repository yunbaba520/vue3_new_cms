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
          component: () => import('../views/main/welcome/welcome.vue')
        },
        {
          path: 'test01',
          name: 'test01',
          component: () => import('../views/main/testPage01/testPage01.vue')
        },
        {
          path: 'test02',
          name: 'test02',
          component: () => import('../views/main/testPage02/testPage02.vue')
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
