<template>
  <page-search
    ref="userSearchRef"
    :searchConfig="searchConfig"
    @queryClick="handleQuery"
  ></page-search>
  <PageTable :contentConfig="contentConfig" :tableData="tableData">
    <template #status="scope">
      <el-button type="primary" size="small" link @click="handleRowStatusClick(scope.row)">
        操作
      </el-button>
    </template>
  </PageTable>
</template>

<script setup>
import { ref } from 'vue'
import PageSearch from '../../../components/mySearch/index.vue'
import PageTable from '../../../components/myTable/index.vue'

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
// table
const contentConfig = ref({
  childrenProps: {},
  propsList: [
    { type: 'index', label: '编号', width: '80px' },
    { type: 'normal', prop: 'EventDevType', label: '刷卡位置' },
    { type: 'normal', prop: 'EventType', label: '刷卡类型' },
    { type: 'normal', prop: 'EventMessage', label: '刷卡内容' },
    { type: 'normal', prop: 'ReportTime', label: '刷卡时间' },
    { type: 'custom', slotName: 'status', label: '刷卡时间' }
  ]
})
const tableData = ref([
  {
    EventDevType: '测试',
    EventType: '测试',
    EventMessage: '测试',
    ReportTime: '测试'
  }
])
function handleRowStatusClick() {}
</script>

<style lang="less" scoped></style>
