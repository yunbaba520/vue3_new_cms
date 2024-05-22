<template>
  <page-search
    ref="userSearchRef"
    :searchConfig="searchConfig"
    @queryClick="handleQuery"
  ></page-search>
</template>

<script setup>
import { ref } from 'vue'
import PageSearch from '../../../components/mySearch/index.vue'

const userSearchRef = ref(null)

const searchConfig = {
  pageName: 'park',
  formItems: [
    {
      label: '手机号',
      prop: 'cellPhone',
      type: 'input',
      placeholder: '请输入手机号'
    },
    {
      label: '所属门店',
      prop: 'storeId',
      type: 'select',
      placeholder: '请选择',
      options: [
        {
          label: '选项1',
          value: 1
        }
      ]
    },
    {
      label: '时间',
      prop: 'time',
      type: 'date-picker',
      placeholder: '请选择时间'
    }
  ]
}
function handleQuery(val) {
  console.log('搜索', val)
}
</script>

<style lang="less" scoped></style>
