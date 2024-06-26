import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import {
  DARKMODE,
  LAYOUT,
  SYSTHEMECOLOR,
  TOPTHEMECOLOR,
  MENUTHEMECOLOR
} from '@/constant/appConfig'
import {
  setTopTextColorByTopThemeColor,
  setMenuTextColorByMenuThemeColor,
  setSysOtherColorBySysThemeColor,
  setLogoTextColorByLayoutChange
} from '@/utils/setColor'

const useAppConfig = defineStore('appConfig', {
  state: () => ({
    // 侧边栏是否折叠
    sideIsFold: false,
    // 主题
    darkMode: localCache.getCache(DARKMODE) || false,
    // 布局
    layout: localCache.getCache(LAYOUT) || 'classic',
    // 系统主题颜色
    sysThemeColor: localCache.getCache(SYSTHEMECOLOR) || '#409eff',
    // 头部主题
    topThemeColor: localCache.getCache(TOPTHEMECOLOR) || '#fff',
    // 菜单主题
    menuThemeColor: localCache.getCache(MENUTHEMECOLOR) || '#fff',
    // 面包屑
    breadcrumb: true,
    // 面包屑icon
    breadcrumbIcon: true,
    // 灰色模式
    greyMode: false
  }),
  actions: {
    setSideFold(bool) {
      this.sideIsFold = bool
    },
    // 光暗主题
    setDarkMode(bool) {
      this.darkMode = bool
      localCache.setCache(DARKMODE, bool)
      // console.log(localCache.getCache(DARKMODE))
    },
    // 布局
    setLayout(value) {
      this.layout = value
      localCache.setCache(LAYOUT, value)
    },
    // 系统主题
    setSysThemeColor(value) {
      this.sysThemeColor = value
      localCache.setCache(SYSTHEMECOLOR, value)
    },
    // 头部主题
    setTopThemeColor(color) {
      this.topThemeColor = color
      localCache.setCache(TOPTHEMECOLOR, color)
    },
    // 菜单主题
    setMenuThemeColor(color) {
      this.menuThemeColor = color
      localCache.setCache(MENUTHEMECOLOR, color)
    },
    // 面包屑
    setBreadcrumb(bool) {
      this.breadcrumb = bool
    },
    // 面包屑icon
    setBreadcrumbIcon(bool) {
      this.breadcrumbIcon = bool
    },
    // 灰色模式
    setGreyMode(bool) {
      this.greyMode = bool
    },
    // 刷新
    handlerRefresh() {
      console.log('刷新函数')
      setSysOtherColorBySysThemeColor(this.sysThemeColor)
      setTopTextColorByTopThemeColor(this.topThemeColor)
      setMenuTextColorByMenuThemeColor(this.menuThemeColor)
      setLogoTextColorByLayoutChange(this.layout)
    }
  }
})
export default useAppConfig
