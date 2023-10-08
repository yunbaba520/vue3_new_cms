<template>
  <div class="layout">
    <el-container class="container-wrap">
      <el-aside :width="isFold ? '60px' : '200px'">
        <PageAside :sideIsFold="isFold"></PageAside>
      </el-aside>
      <el-container>
        <el-header height="85px">
          <PageHeader @isFoldChange="handleAsideWidthChange"></PageHeader>
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageHeader from '@/components/page-header/index.vue'
import PageAside from '@/components/page-aside/index.vue'
const isFold = ref(false)
function handleAsideWidthChange(value) {
  isFold.value = value
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  .container-wrap {
    height: 100%;
    .el-aside {
      transition: width 0.3s;
    }
    .el-header {
      padding: 0;
    }
  }
}
</style>
