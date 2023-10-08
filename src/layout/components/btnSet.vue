<template>
  <div class="btn-wrap">
    <el-icon size="20" @click="openSet"><Setting /></el-icon>
  </div>
  <AppSetDrawer ref="appSetRef"></AppSetDrawer>
</template>

<script setup>
import { ref } from 'vue'
import AppSetDrawer from './appSetDrawer.vue'
const appSetRef = ref()
function openSet() {
  appSetRef.value.openSetDrawer()
}
</script>

<style lang="less" scoped>
.btn-wrap {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eee;
  }
}
</style>
