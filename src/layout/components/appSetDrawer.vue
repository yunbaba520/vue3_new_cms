<template>
  <el-drawer v-model="drawer" :size="400" title="项目配置">
    <el-divider>
      <span>主题</span>
    </el-divider>
    <el-switch />
    <el-divider>
      <span>布局</span>
    </el-divider>
    <div class="layout-btns">
      <div
        :class="['btn', 'btn-classic', appConfigStore.layout === 'classic' ? 'active' : '']"
        @click="setLayout('classic')"
      ></div>
      <div
        :class="['btn', 'btn-topLeft', appConfigStore.layout === 'topLeft' ? 'active' : '']"
        @click="setLayout('topLeft')"
      ></div>
      <div
        :class="['btn', 'btn-top', appConfigStore.layout === 'top' ? 'active' : '']"
        @click="setLayout('top')"
      ></div>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import useAppConfig from '../../stores/appConfig/index'
const appConfigStore = useAppConfig()
// 抽屉
const drawer = ref(false)
function openSetDrawer() {
  drawer.value = true
}
// 布局
function setLayout(selectLayout) {
  appConfigStore.setLayout(selectLayout)
}
defineExpose({
  openSetDrawer
})
</script>

<style lang="less" scoped>
.layout-btns {
  padding: 0 40px;
  display: flex;
  justify-content: space-around;
  .btn {
    width: 60px;
    height: 60px;
    background-color: #ddd;
    border-radius: 4px;
    border: 2px solid #ddd;
    position: relative;
    cursor: pointer;
  }
  .active {
    border: 2px solid blue;
  }
  .btn-classic::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 33%;
    height: 100%;
    background-color: #273352;
    border-radius: 4px 0 0 4px;
    content: '';
  }
  .btn-classic::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: #fff;
    border-radius: 4px 4px 0 4px;
    content: '';
  }
  .btn-topLeft::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #fff;
    border-radius: 4px 0 0 4px;
    content: '';
  }
  .btn-topLeft::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    z-index: 1;
    background-color: #273352;
    border-radius: 4px 4px 0 0;
    content: '';
  }
  .btn-top::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    z-index: 1;
    background-color: #273352;
    border-radius: 4px 4px 0 0;
    content: '';
  }
}
</style>
