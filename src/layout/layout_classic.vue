<template>
  <div class="layout">
    <el-container class="container-wrap">
      <el-aside :width="appConfigStore.sideIsFold ? '64px' : '200px'">
        <Logo></Logo>
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header height="85px">
          <div class="page-header">
            <div class="top-info">
              <div class="info-left">
                <BtnFold></BtnFold>
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
            <HeaderTags></HeaderTags>
          </div>
        </el-header>
        <el-main>
          <RouterViewWrap></RouterViewWrap>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Logo from './components/logo.vue'
import Menu from './components/menu.vue'
import BtnFold from './components/btnFold.vue'
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
      background-color: #001529;
      transition: width 0.3s;
    }
    .el-header {
      padding: 0;
    }
    .page-header {
      box-sizing: border-box;
      height: 85px;
      .top-info {
        height: 50px;
        padding: 0 10px;
        background-color: #fff;
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
    }
  }
}
</style>
