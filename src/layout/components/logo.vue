<template>
  <div class="aside-top">
    <img src="@/assets/image/logo.svg" alt="" />
    <span v-show="!appConfigStore.sideIsFold">ZY后台管理项目</span>
  </div>
</template>

<script setup>
import useAppConfig from '../../stores/appConfig/index'
const appConfigStore = useAppConfig()
</script>

<style lang="less" scoped>
.aside-top {
  height: 28px;
  display: flex;
  align-items: center;
  padding: 8px;

  img {
    height: 100%;
    margin: 0 10px;
  }
  span {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}
</style>
