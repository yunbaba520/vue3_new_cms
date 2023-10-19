<template>
  <div class="layout">
    <el-container class="container-wrap">
      <el-header height="50px">
        <div class="top-info">
          <div class="info-left">
            <Logo></Logo>
            <BtnFold></BtnFold>
            <Breadcrumb></Breadcrumb>
          </div>
          <div class="info-right">
            <!-- 全屏 -->
            <BtnFullScreen></BtnFullScreen>
            <!-- app设置 -->
            <BtnSet></BtnSet>
            <!-- user -->
            <BtnUser></BtnUser>
          </div>
        </div>
      </el-header>

      <el-container>
        <el-aside :width="appConfigStore.sideIsFold ? '64px' : '200px'">
          <Menu></Menu>
        </el-aside>
        <el-container>
          <el-main>
            <HeaderTags></HeaderTags>
            <RouterViewWrap></RouterViewWrap>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Logo from './components/logo.vue'
import Menu from './components/menu.vue'
import BtnFold from './components/btnFold.vue'
import Breadcrumb from './components/breadcrumb.vue'
import BtnUser from './components/btnUser.vue'
import BtnSet from './components/btnSet.vue'
import BtnFullScreen from './components/btnFullScreen.vue'
import RouterViewWrap from './components/routerViewWrap.vue'
import HeaderTags from './components/headerTags.vue'

import useAppConfig from '@/stores/appConfig/index'
const appConfigStore = useAppConfig()
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  .container-wrap {
    height: 100%;
    .el-aside {
      background-color: var(--left-menu-bg-color);
      transition: width 0.3s;
    }
    .el-header {
      padding: 0;
    }
    .top-info {
      box-sizing: border-box;
      height: 50px;
      padding: 0 10px;
      color: var(--top-header-text-color);

      background-color: var(--top-header-bg-color);
      display: flex;
      justify-content: space-between;
      .info-left {
        height: 100%;
        display: flex;
        align-items: center;
        .el-icon {
          cursor: pointer;
        }
      }
      .info-right {
        display: flex;
        align-items: center;
      }
    }

    .el-main {
      padding: 0;
    }
  }
}
</style>
