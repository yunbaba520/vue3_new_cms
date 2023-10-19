<template>
  <div class="aside-top">
    <img src="@/assets/image/logo.svg" alt="" />
    <span v-show="isShowText">ZY后台管理项目</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import useAppConfig from '../../stores/appConfig/index'
const appConfigStore = useAppConfig()

const isShowText = computed(() => {
  return !appConfigStore.sideIsFold || appConfigStore.layout !== 'classic'
})
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
    color: var(--logo-text-color);
    white-space: nowrap;
  }
}
</style>
