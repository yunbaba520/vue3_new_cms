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
      <el-icon><Setting /></el-icon>
    </div>
  </ul>
</template>

<script setup>
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
// 刷新
function handleRefresh() {
  console.log(route)
  //先清除缓存，再跳转回来
  tagsViewStore.clearCurrentKeepView()
  router.replace({ path: '/redirect' + route.path, query: { type: 'back', url: route.path } })
}
</script>

<style lang="less" scoped>
.top-menu {
  box-sizing: border-box;

  height: 35px;
  background-color: #fff;

  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  .btn {
    width: 35px;
    height: 100%;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  .left-arrow {
    border-right: 1px solid pink;
  }
  .right-arrow {
    border-left: 1px solid pink;
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
      color: #888;
      margin: 0 4px;
      cursor: pointer;
      border: 1px solid pink;
      border-radius: 2px;
      display: flex;
      align-items: center;
      .close {
        visibility: hidden;
      }
      &:hover {
        background-color: pink;
        color: #fff;
        .close {
          visibility: visible;
        }
      }
    }
    .active {
      background-color: pink;
      color: #fff;
    }
  }
}
</style>
