<template>
  <div>
    <h1>测试自定义指令</h1>
    <ul>
      <li>拖拽</li>
      <li>权限</li>
      <li>防抖</li>
      <li>节流</li>
    </ul>
    <div v-dragPosition="'drag_title'" class="test">
      <div class="drag_title">
        可拖拽,v-dragPosition不传值整体可拖拽，传值表示只有子元素可拖拽，值为子元素的类名
      </div>
    </div>
    <div>
      <el-button type="primary" v-permission="'100'">有权限</el-button>
      <el-button type="primary" v-permission="'200'">无权限</el-button>
    </div>

    <div>
      <el-button type="primary" v-debounce="debounceFn">防抖指令</el-button>
      <el-button type="primary" v-throttle:3000="throttleFn">节流指令</el-button>
    </div>
  </div>
</template>

<script setup>
function debounceFn() {
  console.log('我是防抖函数，我被触发了')
}
function throttleFn() {
  console.log('我是节流函数，我被触发了')
}
</script>

<style lang="less" scoped>
.test {
  position: absolute;
  top: 300px;
  left: 300px;
  width: 300px;
  height: 300px;
  background-color: pink;
}
</style>
