<template>
  <div>测试页1</div>
  <el-input v-model="input" placeholder="Please input" />
  <el-button type="primary" @click="toggleDark()">改变主题色{{ isDark }}</el-button>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')

import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped></style>
