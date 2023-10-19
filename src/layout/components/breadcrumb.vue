<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <template v-for="item in listArr" :key="item.name">
      <el-breadcrumb-item>{{ item.meta.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
const listArr = ref([])
watch(
  currentRoute,
  (newV) => {
    console.log(newV)
    listArr.value = newV.matched
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.breadcrumb {
  padding-left: 10px;
  :deep(.el-breadcrumb__inner) {
    color: var(--top-header-text-color);
    font-weight: 700;
  }
}
</style>
