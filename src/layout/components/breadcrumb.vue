<template>
  <el-breadcrumb separator="/" class="breadcrumb" v-if="appConfigStore.breadcrumb">
    <template v-for="item in listArr" :key="item.name">
      <el-breadcrumb-item>
        <el-icon v-if="appConfigStore.breadcrumbIcon && item.meta.icon" size="20px">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import useAppConfig from '../../stores/appConfig/index'
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter()
const appConfigStore = useAppConfig()

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
    height: 30px;
    color: var(--top-header-text-color);
    font-weight: 700;
    display: flex;
    align-items: center;
    .el-icon {
      margin-right: 4px;
    }
  }
}
</style>
