<template>
  <h1 class="animate__animated animate__bounce">An animated element</h1>
  <el-input v-model="input" placeholder="Please input" />
  <div v-for="item in tagsViewStore.keepAliveViews" :key="item.name">
    {{ item.name }}
  </div>
  <el-button type="primary" @click="testAxios">测试axios</el-button>
  <el-button type="primary" @click="getModel">获取model</el-button>
</template>

<script setup>
import { ref } from 'vue'
import { requestTest, requestModel } from '../../../service/test/test'
const input = ref('')

import useTagsView from '../../../stores/tagsView/index'
const tagsViewStore = useTagsView()

function testAxios() {
  requestTest()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

function getModel() {
  requestModel()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style lang="less" scoped></style>
