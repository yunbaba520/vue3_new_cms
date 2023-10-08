<template>
  <LayoutClassic v-if="appConfigStore.layout === 'classic'"></LayoutClassic>
  <LayoutTopLeft v-else-if="appConfigStore.layout === 'topLeft'"></LayoutTopLeft>
  <LayoutTop v-else-if="appConfigStore.layout === 'top'"></LayoutTop>
  <h2 v-else>出错了</h2>
</template>

<script setup>
import LayoutClassic from './layout_classic.vue'
import LayoutTopLeft from './layout_topLeft.vue'
import LayoutTop from './layout_top.vue'

import useAppConfig from '../stores/appConfig/index'
const appConfigStore = useAppConfig()
</script>

<style lang="less" scoped></style>
