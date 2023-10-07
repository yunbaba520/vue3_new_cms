<template>
  <div class="page-header">
    <div class="top-info">
      <div class="info-left">
        <el-icon size="24px" @click="handlerLeftIconClick">
          <component :is="isFold ? 'expand' : 'fold'"></component>
        </el-icon>
      </div>
      <div class="info-right">
        <!-- 全屏 -->
        <el-icon class="right-icon" size="20"><FullScreen /></el-icon>
        <!-- app设置 -->
        <el-icon class="right-icon" size="20" @click="openSet"><Setting /></el-icon>
        <!-- user -->
        <el-dropdown trigger="click">
          <div class="user">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span>超级管理员</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>锁定屏幕</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="top-menu"></div>
    <AppSet ref="appSetRef"></AppSet>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppSet from '../app-set/index.vue'
// emit
const emits = defineEmits(['isFoldChange'])
const isFold = ref(false)
function handlerLeftIconClick() {
  isFold.value = !isFold.value
  emits('isFoldChange', isFold.value)
}
// 项目设置
const appSetRef = ref()
function openSet() {
  appSetRef.value.openSetDrawer()
}
</script>

<style lang="less" scoped>
.page-header {
  box-sizing: border-box;
  height: 85px;
  .top-info {
    height: 50px;
    padding: 0 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .info-left {
      height: 100%;
      display: flex;
      align-items: center;
      .el-icon {
        cursor: pointer;
      }
    }
    .info-right {
      display: flex;
      align-items: center;
      .right-icon {
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
      .user {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
    }
  }
  .top-menu {
    box-sizing: border-box;

    height: 35px;
    background-color: #fff;

    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
}
</style>
