<template>
  <div class="nav-aside">
    <el-menu
      :collapse="appConfigStore.sideIsFold"
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

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router/index'
import useAppConfig from '../../stores/appConfig/index'
const appConfigStore = useAppConfig()
const userMenu = [
  {
    id: '1',
    icon: 'ElementPlus',
    name: '欢迎页',
    children: [
      {
        id: '1-1',
        name: '欢迎页',
        url: '/main/welcome'
      }
    ]
  },
  {
    id: '2',
    icon: 'ElementPlus',
    name: '测试页01',
    children: [
      {
        id: '2-1',
        name: '测试页01',
        url: '/main/test01'
      }
    ]
  },
  {
    id: '3',
    icon: 'ElementPlus',
    name: '测试页02',
    children: [
      {
        id: '3-1',
        name: '测试页02',
        url: '/main/test02'
      }
    ]
  }
]
function handlerMenuJump(subItem) {
  console.log(subItem)
  router.push(subItem.url)
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
</style>
