import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { LAYOUT, SYSTHEMECOLOR, TOPTHEMECOLOR } from '@/constant/appConfig'
import { setCssVar, setTopTextColorByTopThemeColor } from '@/utils/setColor'

const useAppConfig = defineStore('appConfig', {
  state: () => ({
    // 侧边栏是否折叠
    sideIsFold: false,
    // 布局
    layout: localCache.getCache(LAYOUT) || 'classic',
    // 系统主题颜色
    sysThemeColor: localCache.getCache(SYSTHEMECOLOR) || '#409eff',
    // 头部主题
    topThemeColor: localCache.getCache(TOPTHEMECOLOR) || '#ffffff',
    // 灰色模式
    greyMode: false
  }),
  actions: {
    setSideFold(bool) {
      this.sideIsFold = bool
    },
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
    setGreyMode(bool) {
      this.greyMode = bool
    },
    // 刷新
    handlerRefresh() {
      console.log('刷新函数')
      setCssVar('--el-color-primary', this.sysThemeColor)
      setCssVar('--top-header-bg-color', this.topThemeColor)
      setTopTextColorByTopThemeColor(this.topThemeColor)
    }
  }
})
export default useAppConfig
