<template>
  <div>测试页2</div>
  <el-input v-model="input" placeholder="Please input" />
  <el-button type="primary">测试主题色</el-button>
  <div v-dragPosition="'drag_title'" class="test">
    <div class="drag_title">可拖拽</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped>
.test {
  position: absolute;
  top: 300px;
  left: 300px;
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>
