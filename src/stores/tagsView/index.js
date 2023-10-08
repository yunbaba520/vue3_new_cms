import { defineStore } from 'pinia'
import router from '@/router/index'
const useTagsView = defineStore('tagsView', {
  state: () => ({
    // 缓存的页面
    keepAliveViews: []
  }),
  getters: {
    getAllKeepTags() {
      return this.keepAliveViews.map((item) => {
        return item.name
      })
    },
    getAllKeepViews() {
      return this.keepAliveViews.map((item) => {
        return item.keepName
      })
    }
  },
  actions: {
    // 新增缓存
    addKeepView(pageInfo) {
      if (this.keepAliveViews.findIndex((item) => item.id === pageInfo.id) !== -1) return
      this.keepAliveViews.push(pageInfo)
    },
    // 删除缓存
    deleteKeepView(tag) {
      // 只有一个不删除
      if (this.keepAliveViews.length <= 1) return
      const index = this.keepAliveViews.findIndex((item) => item.id === tag.id)
      if (index === -1) return
      this.keepAliveViews.splice(index, 1)
      // 如果有其他页面，激活其他页面
      // 后
      if (this.keepAliveViews[index]) {
        router.push(this.keepAliveViews[index].url)
      } else if (index >= 1) {
        // 前
        router.push(this.keepAliveViews[index - 1].url)
      }
    }
  }
})
export default useTagsView
