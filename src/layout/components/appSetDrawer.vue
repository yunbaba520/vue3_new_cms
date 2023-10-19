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
    <el-divider>
      <span>系统主题</span>
    </el-divider>
    <ColorRadioPicker
      v-model="sysThemeCurrentColor"
      :colors="sysThemeColors"
      @changeValue="handleSysThemeColorChange"
    ></ColorRadioPicker>
    <el-divider>
      <span>头部主题</span>
    </el-divider>
    <ColorRadioPicker
      v-model="topThemeCurrentColor"
      :colors="topThemeColors"
      @changeValue="handleTopThemeColorChange"
    ></ColorRadioPicker>
    <template v-if="appConfigStore.layout !== 'top'">
      <el-divider>
        <span>菜单主题</span>
      </el-divider>
      <ColorRadioPicker
        v-model="menuThemeCurrentColor"
        :colors="menuThemeColors"
        @changeValue="handleMenuThemeColorChange"
      ></ColorRadioPicker>
    </template>

    <el-divider>
      <span>界面显示</span>
    </el-divider>
    <div class="row">
      <span>面包屑</span>
      <el-switch v-model="breadcrumb" @change="breadcrumbChange" />
    </div>
    <div class="row">
      <span>面包屑图标</span>
      <el-switch v-model="breadcrumbIcon" @change="breadcrumbIconChange" />
    </div>
    <div class="row">
      <span>灰色模式</span>
      <el-switch v-model="greyMode" @change="greyModeChange" />
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import {
  setTopTextColorByTopThemeColor,
  setMenuTextColorByMenuThemeColor,
  setSysOtherColorBySysThemeColor,
  setLogoTextColor,
  setLogoTextColorByLayoutChange
} from '@/utils/setColor'
import ColorRadioPicker from './colorRadioPicker.vue'
import useAppConfig from '@/stores/appConfig/index'
const appConfigStore = useAppConfig()
// 抽屉
const drawer = ref(false)
function openSetDrawer() {
  drawer.value = true
}
// 布局
function setLayout(selectLayout) {
  if (appConfigStore.layout === selectLayout) return
  // 去top
  if (selectLayout === 'top') {
    handleTopThemeColorChange('#fff')
    handleMenuThemeColorChange('#fff')
  }
  // 离开top
  if (appConfigStore.layout === 'top') {
    handleTopThemeColorChange('#fff')
  }
  setLogoTextColorByLayoutChange(selectLayout)
  appConfigStore.setLayout(selectLayout)
}
// 系统主题
const sysThemeCurrentColor = ref(appConfigStore.sysThemeColor)
const sysThemeColors = [
  '#409eff',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800'
]
function handleSysThemeColorChange(v) {
  appConfigStore.setSysThemeColor(v)
  // 其他用到主题色的也需要更新下
  setSysOtherColorBySysThemeColor(v)
}
// 头部主题
const topThemeCurrentColor = ref(appConfigStore.topThemeColor)
const topThemeColors = [
  '#ffffff',
  '#151515',
  '#5172dc',
  '#e74c3c',
  '#24292e',
  '#394664',
  '#009688',
  '#383f45'
]
function handleTopThemeColorChange(v) {
  setTopTextColorByTopThemeColor(v)
  appConfigStore.setTopThemeColor(v)
  // top布局下 根据头部主题色修改菜单主题色
  if (appConfigStore.layout === 'top') {
    handleMenuThemeColorChange(v)
  }
  // 非classic布局下，logoText颜色受top主题影响
  if (appConfigStore.layout !== 'classic') {
    setLogoTextColor(v)
  }
}
// 菜单主题
const menuThemeCurrentColor = ref(appConfigStore.menuThemeColor)
const menuThemeColors = [
  '#fff',
  '#001529',
  '#212121',
  '#273352',
  '#191b24',
  '#383f45',
  '#001628',
  '#344058'
]
function handleMenuThemeColorChange(v) {
  setMenuTextColorByMenuThemeColor(v)
  appConfigStore.setMenuThemeColor(v)
  // classic布局下，logoText颜色受menu主题影响
  if (appConfigStore.layout === 'classic') {
    setLogoTextColor(v)
  }
}
// 面包屑
const breadcrumb = ref(appConfigStore.breadcrumb)
function breadcrumbChange(val) {
  appConfigStore.setBreadcrumb(val)
}
// 面包屑图标
const breadcrumbIcon = ref(appConfigStore.breadcrumbIcon)
function breadcrumbIconChange(val) {
  appConfigStore.setBreadcrumbIcon(val)
}
// 灰色模式
const greyMode = ref(appConfigStore.greyMode)
function greyModeChange(val) {
  appConfigStore.setGreyMode(val)
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
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
