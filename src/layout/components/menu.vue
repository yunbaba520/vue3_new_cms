<template>
  <div class="nav-aside">
    <el-menu
      :mode="mode"
      :collapse="collapse"
      :ellipsis="false"
      :default-active="defaultActive"
      unique-opened
    >
      <template v-for="item in userMenu" :key="item.name">
        <el-sub-menu :index="item.name + ''">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.name">
            <el-menu-item :index="subItem.name + ''" @click="handlerMenuJump(subItem)">{{
              subItem.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import router from '@/router/index'
import { createMenusByRoutes } from '../../utils/mapMenus'

import useAppConfig from '@/stores/appConfig/index'
const appConfigStore = useAppConfig()

const mode = computed(() => {
  return appConfigStore.layout === 'top' ? 'horizontal' : 'vertical'
})
const collapse = computed(() => {
  return appConfigStore.sideIsFold && appConfigStore.layout !== 'top'
})
// 注意格式，路由缓存有使用
const userMenu = createMenusByRoutes()
function handlerMenuJump(subItem) {
  console.log(subItem)
  router.push(subItem.url)
}
// 刷新-菜单默认值
const route = useRoute()
const { currentRoute } = useRouter()
watch(currentRoute, () => {
  const currentMenu = mapDefaultMenu()
  defaultActive.value = currentMenu.name + ''
})
function mapDefaultMenu() {
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (route.path === submenu.url) return submenu
    }
  }
  return userMenu[0].children[0]
}
const currentMenu = mapDefaultMenu()
const defaultActive = ref(currentMenu.name + '')
</script>

<style lang="less" scoped>
.el-menu {
  border-right: none;
  user-select: none;
  background-color: var(--left-menu-bg-color);
  .el-sub-menu {
    :deep(.el-sub-menu__title) {
      color: var(--left-menu-text-color);
      &:hover {
        background-color: var(--left-menu-bg-color);
      }
    }
    .el-menu-item {
      padding-left: 50px !important;
      background-color: var(--left-menu-item-bg-color);
      color: var(--left-menu-text-color);
      &:hover {
        color: var(--left-menu-text-active-color);
      }
    }

    .el-menu-item.is-active {
      background-color: var(--left-menu-item-active-bg-color);
      color: var(--left-menu-text-active-color);
    }
  }
  .el-sub-menu.is-active {
    color: var(--left-menu-text-active-color);

    :deep(.el-sub-menu__title) {
      color: var(--left-menu-text-active-color);
    }
  }
}
.el-menu--horizontal {
  box-sizing: border-box;
  height: 50px;
}
</style>
