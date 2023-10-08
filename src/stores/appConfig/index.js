import { defineStore } from 'pinia'
import { localCache } from '@/utils/cache'
import { LAYOUT } from '../../constant/appConfig'
const useAppConfig = defineStore('appConfig', {
  state: () => ({
    layout: localCache.getCache(LAYOUT) || 'classic'
  }),
  actions: {
    setLayout(value) {
      this.layout = value
      console.log(value)
      localCache.setCache(LAYOUT, value)
    }
  }
})
export default useAppConfig
