import { defineStore } from 'pinia'

const useTagsView = defineStore('tagsView', {
  state: () => ({
    // 缓存的页面路由名称
    keepAliveViewsTags: [],
    // 缓存的页面name名称
    keepAliveViewsName: []
  }),
  actions: {
    // 新增缓存
    addKeepView() {}
  }
})
export default useTagsView
