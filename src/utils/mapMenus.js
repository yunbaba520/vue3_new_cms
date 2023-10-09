import { menuMapRoutes } from '../router/mapMenu'
// 把路由映射为菜单
export function createMenusByRoutes() {
  const menus = []
  for (let i = 0; i < menuMapRoutes.length; i++) {
    const item = menuMapRoutes[i]
    const children = item.children.map((v) => {
      return {
        name: v.meta.title,
        keepName: v.meta.keepName,
        url: item.path + '/' + v.path
      }
    })
    const subMenu = {
      icon: item.meta.icon,
      name: item.meta.title,
      children
    }
    menus.push(subMenu)
  }
  return menus
}
