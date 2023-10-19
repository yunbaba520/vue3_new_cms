<template>
  <div class="color-radio-picker">
    <template v-for="c in colors" :key="c">
      <span
        :class="['btn', modelValue === c ? 'active' : '']"
        :style="{ 'background-color': c }"
        @click="handleClickColor(c)"
      >
        <el-icon v-if="modelValue === c"><Select /></el-icon>
      </span>
    </template>
  </div>
</template>

<script setup>
defineProps({
  colors: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue', 'changeValue'])
function handleClickColor(c) {
  emits('update:modelValue', c)
  emits('changeValue', c)
}
</script>

<style lang="less" scoped>
.color-radio-picker {
  display: flex;
  justify-content: space-around;
  .btn {
    box-sizing: border-box;
    width: 20px;
    height: 20px;

    border: 2px solid #ccc;
    cursor: pointer;
  }
  .active {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--el-color-primary);
    color: #fff;
  }
}
</style>
