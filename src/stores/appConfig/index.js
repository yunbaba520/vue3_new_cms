import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { LAYOUT, SYSTHEMECOLOR } from '@/constant/appConfig'
import { setCssVar } from '../../utils/setColor'

const useAppConfig = defineStore('appConfig', {
  state: () => ({
    // 侧边栏是否折叠
    sideIsFold: false,
    // 布局
    layout: localCache.getCache(LAYOUT) || 'classic',
    // 系统主题颜色
    sysThemeColor: localCache.getCache(SYSTHEMECOLOR) || '#409eff',
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
    setSysThemeColor(value) {
      this.sysThemeColor = value
      localCache.setCache(SYSTHEMECOLOR, value)
    },
    setGreyMode(bool) {
      this.greyMode = bool
    },
    // 刷新
    handlerRefresh() {
      console.log('刷新函数')
      setCssVar('--el-color-primary', this.sysThemeColor)
    }
  }
})
export default useAppConfig
