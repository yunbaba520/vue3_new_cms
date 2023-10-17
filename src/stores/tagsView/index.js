import { defineStore } from 'pinia'
// import { useRoute } from 'vue-router'
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
      const index = this.keepAliveViews.findIndex((item) => item.url === pageInfo.url)
      if (index > -1) {
        // 已存在，看下keepname是否有值
        if (!this.keepAliveViews[index].keepName) {
          this.keepAliveViews[index].keepName = pageInfo.keepName
        }
        return
      }
      this.keepAliveViews.push(pageInfo)
    },
    // 删除缓存
    deleteKeepView(tag) {
      // 只有一个不删除
      if (this.keepAliveViews.length <= 1) return

      const index = this.keepAliveViews.findIndex((item) => item.url === tag.url)
      if (index === -1) return
      this.keepAliveViews.splice(index, 1)
      const currentName = router.currentRoute.value.meta.keepName
      // 关闭的是其他页面
      if (currentName !== tag.keepName) {
        return
      }
      // 关闭的是当前页面，如果有其他页面，激活其他页面
      // 后
      if (this.keepAliveViews[index]) {
        router.push(this.keepAliveViews[index].url)
      } else if (index >= 1) {
        // 前
        router.push(this.keepAliveViews[index - 1].url)
      }
    },
    // 删除多个缓存
    deleteKeepViewMul(index, type = 'left') {
      console.log(index, type)
      if (type === 'left') {
        this.keepAliveViews.splice(0, index)
      } else if (type === 'right') {
        const currentLength = this.keepAliveViews.length
        this.keepAliveViews.splice(index + 1, currentLength)
      } else if (type === 'other') {
        this.keepAliveViews = [this.keepAliveViews[index]]
      }
    },
    // 清除当前路由缓存
    clearCurrentKeepView() {
      console.log(router.currentRoute.value.meta.keepName, '清除缓存keepname')
      const currentName = router.currentRoute.value.meta.keepName
      const index = this.keepAliveViews.findIndex((v) => v.keepName === currentName)
      if (index > -1) {
        this.keepAliveViews[index].keepName = ''
      }
    }
  }
})
export default useTagsView
