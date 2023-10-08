<template>
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
</template>

<script setup></script>

<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
