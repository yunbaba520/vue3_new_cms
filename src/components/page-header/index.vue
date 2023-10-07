<template>
  <div class="page-header">
    <div class="top-info">
      <div class="info-left">
        <el-icon size="24px" @click="handlerLeftIconClick">
          <component :is="isFold ? 'expand' : 'fold'"></component>
        </el-icon>
      </div>
      <div class="info-right"></div>
    </div>
    <div class="top-menu"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// emit
const emits = defineEmits(['isFoldChange'])
const isFold = ref(false)
function handlerLeftIconClick() {
  isFold.value = !isFold.value
  emits('isFoldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.page-header {
  box-sizing: border-box;
  height: 85px;
  .top-info {
    height: 50px;
    padding: 0 10px;
    background-color: #fff;
    .info-left {
      height: 100%;
      display: flex;
      align-items: center;
      .el-icon {
        cursor: pointer;
      }
    }
  }
  .top-menu {
    box-sizing: border-box;

    height: 35px;
    background-color: #fff;

    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
}
</style>
