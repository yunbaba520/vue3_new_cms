<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive :include="getCaches">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </template>
  </router-view>
</template>

<script setup>
import { computed } from 'vue'
import useTagsView from '../../stores/tagsView/index'
const tagsViewStore = useTagsView()
const getCaches = computed(() => tagsViewStore.getAllKeepViews)
</script>

<style lang="less" scoped></style>
