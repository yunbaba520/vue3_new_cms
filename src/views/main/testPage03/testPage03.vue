<template>
  <div>
    <h1>测试自定义指令</h1>
    <ul>
      <li>拖拽</li>
      <li>权限</li>
      <li>防抖</li>
      <li>节流</li>
      <li>折叠</li>
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
    <div>
      <el-button type="primary" @click="openCollapse">打开折叠指令</el-button>
      <el-button type="primary" @click="closeCollapse">关闭折叠指令</el-button>
    </div>
    <div class="right" v-collapse="'right'">
      <div>xxxx</div>
      <div>yyyy</div>
      <div>zzzz</div>
    </div>
    <div class="bottom" v-collapse="'bottom'">
      <div>xxxx</div>
      <div>yyyy</div>
      <div>zzzz</div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
function debounceFn() {
  console.log('我是防抖函数，我被触发了')
  console.log(this)
}
function throttleFn() {
  console.log('我是节流函数，我被触发了')
}

function openCollapse() {
  instance.appContext.config.globalProperties.$openCollapse()
}
function closeCollapse() {
  instance.appContext.config.globalProperties.$closeCollapse()
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
.right {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: pink;
}
.bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 900px;
  height: 300px;
  background-color: pink;
}
</style>
