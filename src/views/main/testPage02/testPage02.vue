<template>
  <div>测试页2</div>
  <el-input v-model="input" placeholder="Please input" />
  <el-button type="primary">测试主题色</el-button>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="scss" scoped></style>
