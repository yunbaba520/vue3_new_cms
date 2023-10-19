import { createRouter, createWebHashHistory } from 'vue-router'
import { menuMapRoutes } from './mapMenu'
import useTagsView from '@/stores/tagsView/index'
const mainView = () => import('../views/main/index.vue')

const router = createRouter({
  history: createWebHashHistory(),
  // name必须，且与文件名保持一致
  routes: [
    {
      path: '/',
      redirect: '/menu-1'
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },

    {
      path: '/redirect',
      component: mainView,
      name: 'redirect',
      children: [
        {
          path: '/redirect/:path(.*)',
          name: 'redirect',
          component: () => import('../views/redirect/index.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/error/404.vue')
    }
  ]
})
for (const menu of menuMapRoutes) {
  router.addRoute(menu)
}

// 路由导航
router.beforeEach((to) => {
  // 缓存
  if (to.meta.keepName) {
    console.log(to, '缓存页面')
    const obj = {
      name: to.meta.title,
      keepName: to.meta.keepName,
      url: to.path
    }
    const tagsViewStore = useTagsView()
    tagsViewStore.addKeepView(obj)
  }
})

export default router
