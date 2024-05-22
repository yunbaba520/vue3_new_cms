<template>
  <div class="search">
    <!-- 1.1.表单输入 -->
    <el-form :model="searchForm" ref="formRef" label-width="90px" size="large" id="search-form">
      <template v-for="item in searchConfig.formItems" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <template v-if="item.type === 'input'">
            <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
          </template>

          <template v-if="item.type === 'date-picker'">
            <el-date-picker
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              v-model="searchForm[item.prop]"
            />
          </template>
          <template v-if="item.type === 'select'">
            <el-select
              v-model="searchForm[item.prop]"
              :placeholder="item.placeholder"
              clearable
              filterable
            >
              <el-option
                v-for="opt in item.options"
                :key="opt.value"
                :label="opt.label"
                :value="opt.value"
              />
            </el-select>
          </template>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button size="large" icon="Refresh" @click="handleResetClick">重置</el-button>
        <el-button size="large" icon="Search" type="primary" @click="handleQueryClick">
          查询
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  searchConfig: {
    type: Object,
    default() {
      return {
        pageName: '',
        formItems: []
      }
    }
  }
})
const emit = defineEmits(['queryClick', 'resetClick'])

// 1.创建表单的数据
const initialForm = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item['prop']] = item['initialValue'] ?? ''
}
const searchForm = reactive(initialForm)

// 2.监听按钮的点击
const formRef = ref()
function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}
function handleQueryClick() {
  emit('queryClick', searchForm)
}

defineExpose({
  handleQueryClick
})
</script>

<style scoped lang="less">
.search {
  padding: 20px;
  border-radius: 5px;
  .el-form {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
  }
  .el-form-item {
    width: 394px;
    margin-bottom: 0;
    padding: 10px 0;
    .el-range-editor--large.el-input__wrapper {
      width: 280px;
    }
    .el-select {
      width: 100%;
    }
  }
}
</style>
