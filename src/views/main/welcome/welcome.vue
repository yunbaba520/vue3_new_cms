<template>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  <el-input v-model="input" placeholder="Please input" />
  <span>{{ tagsViewStore.keepAliveViews }}</span>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')

import useTagsView from '../../../stores/tagsView/index'
const tagsViewStore = useTagsView()
</script>

<style lang="less" scoped></style>
