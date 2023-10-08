<template>
  <el-icon size="24px" @click="handlerLeftIconClick">
    <component :is="appConfigStore.sideIsFold ? 'expand' : 'fold'"></component>
  </el-icon>
</template>

<script setup>
import useAppConfig from '../../stores/appConfig/index'
const appConfigStore = useAppConfig()
function handlerLeftIconClick() {
  const newV = !appConfigStore.sideIsFold
  appConfigStore.setSideFold(newV)
}
</script>

<style lang="scss" scoped></style>
