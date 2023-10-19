<template>
  <div class="btn-wrap" @click="toggleFullscreen">
    <el-icon size="20"><FullScreen /></el-icon>
  </div>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'

const { toggle } = useFullscreen()
function toggleFullscreen() {
  toggle()
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
    background-color: var(--top-header-bg-hover-color);
  }
}
</style>
