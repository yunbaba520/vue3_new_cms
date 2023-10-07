<template>
  <div class="nav-aside">
    <div class="aside-top">
      <img src="@/assets/image/logo.svg" alt="" />
      <span v-show="!sideIsFold">ZY后台管理项目</span>
    </div>
    <el-menu
      :collapse="sideIsFold"
      :default-active="defaultActive"
      unique-opened
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
    >
      <template v-for="item in userMenu" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item :index="subItem.id + ''" @click="handlerMenuJump(subItem)">{{
              subItem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
defineProps({
  sideIsFold: {
    type: Boolean,
    default: false
  }
})
const userMenu = [
  {
    id: '1',
    icon: 'ElementPlus',
    name: '欢迎页',
    children: [
      {
        id: '1-1',
        name: '欢迎页',
        url: 'welcome'
      }
    ]
  }
]
//
function handlerMenuJump(subItem) {
  console.log(subItem)
}
// 刷新-菜单默认值
const route = useRoute()
function mapDefaultMenu() {
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (route.path === submenu.url) return submenu
    }
  }
  return userMenu[0].children[0]
}
const currentMenu = mapDefaultMenu()
const defaultActive = ref(currentMenu.id + '')
</script>

<style lang="less" scoped>
.nav-aside {
  height: 100%;
  background-color: #001529;
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
  .el-menu {
    border-right: none;
    user-select: none;
    .el-sub-menu {
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135;
      }

      .el-menu-item:hover {
        color: #fff;
      }

      .el-menu-item.is-active {
        background-color: #0a60bd;
      }
    }
  }
}
</style>
