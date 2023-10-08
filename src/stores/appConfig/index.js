import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { LAYOUT } from '../../constant/appConfig'
const useAppConfig = defineStore('appConfig', {
  state: () => ({
    // 侧边栏是否折叠
    sideIsFold: false,
    // 布局
    layout: localCache.getCache(LAYOUT) || 'classic',
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
    setGreyMode(bool) {
      this.greyMode = bool
    }
  }
})
export default useAppConfig
