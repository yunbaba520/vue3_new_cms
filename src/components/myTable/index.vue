<template>
  <div class="content">
    <div class="table">
      <el-table
        ref="tableRef"
        :data="tableData"
        :show-overflow-tooltip="isTooltip"
        style="width: 100%"
        header-cell-class-name="table-header-col"
        :highlight-current-row="highlightSelect"
        @current-change="handleTableSingleChange"
        v-bind="contentConfig.childrenProps"
      >
        <template v-for="item in contentConfig.propsList" :key="item.prop">
          <template v-if="item.type === 'custom'">
            <el-table-column align="center" :label="item.label" :width="item.width">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'dict'">
            <el-table-column
              align="center"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
            >
              <template #default="scope">
                {{ item.dict[scope.row[item.prop]] }}
              </template>
            </el-table-column>
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item" />
          </template>
        </template>
      </el-table>
    </div>

    <div class="footer" v-if="isShowPagination">
      <el-pagination
        :currentPage="pageNum"
        :page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        :layout="layout"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  contentConfig: {
    type: Object,
    required: true
  },
  tableData: {
    type: Array,
    default: () => []
  },
  isTooltip: {
    type: Boolean,
    default: false
  },
  // 高亮当前行
  highlightSelect: {
    type: Boolean,
    default: false
  },
  // 分页
  isShowPagination: {
    type: Boolean,
    default: true
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageNum: {
    type: Number,
    default: 1
  },
  layout: {
    type: String,
    default: ' sizes, prev, pager, next, jumper'
  }
})
const emits = defineEmits(['tableCurrentChange', 'currentChange', 'sizeChange'])
const tableRef = ref(null)
function handleTableSingleChange(currentRow) {
  emits('tableCurrentChange', currentRow)
}
// 分页
function handleCurrentChange(val) {
  emits('currentChange', val)
}
function handleSizeChange(val) {
  emits('sizeChange', val)
}

function setSingleRow(row) {
  tableRef.value.setCurrentRow(row)
}
defineExpose({
  setSingleRow
})
</script>
<style scoped lang="less">
.content {
  border-radius: 10px;

  .table {
    :deep(.el-table__cell) {
      padding: 14px 0;
    }
    :deep(.table-header-col) {
      background-color: #fafafa;
    }
  }
  .footer {
    box-sizing: border-box;
    display: flex;
    height: 60px;
    justify-content: flex-end;
    padding: 15px 20px 0 20px;
  }
}
</style>
