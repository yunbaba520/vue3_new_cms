<template>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  <el-input v-model="input" placeholder="Please input" />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less" scoped></style>
