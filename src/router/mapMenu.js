const mainView = () => import('../views/main/index.vue')

export const menuMapRoutes = [
  {
    path: '/menu-1',
    name: 'menu-1',
    redirect: '/menu-1/menu-1-1',
    component: mainView,
    meta: { title: '主菜单1', icon: 'ElementPlus' },
    children: [
      {
        path: 'menu-1-1',
        name: 'menu-1-1',
        component: () => import('../views/main/welcome/welcome.vue'),
        meta: { title: '欢迎页', keepName: 'welcome' }
      }
    ]
  },
  {
    path: '/menu-2',
    name: 'menu-2',
    redirect: '/menu-2/menu-2-1',
    component: mainView,
    meta: { title: '主菜单2', icon: 'ElementPlus' },
    children: [
      {
        path: 'menu-2-1',
        name: 'menu-2-1',
        component: () => import('../views/main/testPage01/testPage01.vue'),
        meta: { keepName: 'testPage01', title: '测试页1' }
      },
      {
        path: 'menu-2-2',
        name: 'menu-2-2',
        component: () => import('../views/main/testPage02/testPage02.vue'),
        meta: { keepName: 'testPage02', title: '测试页2' }
      }
    ]
  }
]
