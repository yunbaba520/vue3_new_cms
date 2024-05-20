<template>
  <ul class="top-menu">
    <div class="left-arrow btn">
      <el-icon><DArrowLeft /></el-icon>
    </div>
    <div class="tags">
      <li
        v-for="tag in tagsViewStore.keepAliveViews"
        :key="tag.id"
        @click="handleJumpPage(tag)"
        :class="route.fullPath === tag.url ? 'active' : ''"
      >
        <span>{{ tag.name }}</span>
        <el-icon class="close" @click="handleCloseTag(tag)"><Close /></el-icon>
      </li>
    </div>
    <div class="right-arrow btn">
      <el-icon><DArrowRight /></el-icon>
    </div>
    <div class="right-arrow btn">
      <el-icon @click="handleRefresh"><RefreshRight /></el-icon>
    </div>
    <div class="right-arrow btn">
      <el-dropdown trigger="click" @command="handleCommand">
        <el-icon><Setting /></el-icon>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="refresh"
              ><el-icon><RefreshRight /></el-icon>重新加载</el-dropdown-item
            >
            <el-dropdown-item
              command="closeCurrent"
              :disabled="tagsViewStore.keepAliveViews.length <= 1"
              ><el-icon><Close /></el-icon>关闭当前标签页</el-dropdown-item
            >
            <el-dropdown-item divided command="closeLeft" :disabled="currentIndex < 1"
              ><el-icon><ArrowLeft /></el-icon>关闭左侧标签页</el-dropdown-item
            >
            <el-dropdown-item
              command="closeRight"
              :disabled="currentIndex >= tagsViewStore.keepAliveViews.length - 1"
              ><el-icon><ArrowRight /></el-icon>关闭右侧标签页</el-dropdown-item
            >
            <el-dropdown-item
              divided
              command="closeOther"
              :disabled="tagsViewStore.keepAliveViews.length <= 1"
              ><el-icon><Position /></el-icon>关闭其他标签页</el-dropdown-item
            >
            <el-dropdown-item
              command="closeOther"
              :disabled="tagsViewStore.keepAliveViews.length <= 1"
            >
              <el-icon><Minus /></el-icon>关闭全部标签页</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router/index'
import useTagsView from '@/stores/tagsView/index'
const tagsViewStore = useTagsView()
function handleCloseTag(tag) {
  event.stopPropagation()
  tagsViewStore.deleteKeepView(tag)
}
function handleJumpPage(tag) {
  router.push(tag.url)
}
const route = useRoute()
function handleCommand(command) {
  switch (command) {
    case 'refresh':
      handleRefresh()
      break
    case 'closeCurrent':
      handleCloseCurrentTag()
      break
    case 'closeLeft':
      handleCloseTagMul('left')
      break
    case 'closeRight':
      handleCloseTagMul('right')
      break
    case 'closeOther':
      handleCloseTagMul('other')
      break
    default:
      break
  }
}
// 当前页面在缓存数组中下标
const currentIndex = computed(() => {
  const currentPageKeepName = route.meta.keepName || ''
  const currentTagIndex = tagsViewStore.keepAliveViews.findIndex(
    (v) => v.keepName === currentPageKeepName
  )
  return currentTagIndex
})
// 刷新
function handleRefresh() {
  // console.log(route)
  //先清除缓存，再跳转回来
  tagsViewStore.clearCurrentKeepView()
  router.replace({ path: '/redirect' + route.path, query: { type: 'back', url: route.path } })
}
// 关闭当前标签页
function handleCloseCurrentTag() {
  const currentTag = tagsViewStore.keepAliveViews[currentIndex.value]
  handleCloseTag(currentTag)
}
// 关闭标签页
function handleCloseTagMul(type = 'left') {
  tagsViewStore.deleteKeepViewMul(currentIndex.value, type)
}
</script>

<style lang="less" scoped>
.top-menu {
  box-sizing: border-box;

  height: 35px;

  border-top: 1px solid var(--el-color-primary);
  border-bottom: 1px solid var(--el-color-primary);
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  .btn {
    width: 35px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
  .left-arrow {
    border-right: 1px solid var(--el-color-primary);
  }
  .right-arrow {
    border-left: 1px solid var(--el-color-primary);
  }
  .tags {
    flex: 1;
    display: flex;
    align-items: center;
    li {
      box-sizing: border-box;
      height: 30px;
      line-height: 30px;
      padding: 0 4px;
      // color: #888;
      font-size: 14px;
      margin: 0 4px;
      cursor: pointer;
      border: 1px solid var(--el-color-primary);
      border-radius: 2px;
      display: flex;
      align-items: center;
      .close {
        visibility: hidden;
      }
      &:hover {
        background-color: var(--el-color-primary);
        color: #fff;
        .close {
          visibility: visible;
        }
      }
    }
    .active {
      background-color: var(--el-color-primary);
      color: #fff;
    }
  }
}
</style>
