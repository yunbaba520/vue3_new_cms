<template>
  <div class="error-cpn">
    <div class="content">
      <img :src="errorMap[type].url" alt="" />
      <div class="info">{{ errorMap[type].message }}</div>
      <div class="btn-wrap">
        <el-button type="primary" @click="btnClick">{{ errorMap[type].buttonText }}</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import pageError from '@/assets/svg/404.svg'
import networkError from '@/assets/svg/500.svg'
import noPermission from '@/assets/svg/403.svg'

const errorMap = {
  404: {
    url: pageError,
    message: '抱歉，您访问的页面不存在。',
    buttonText: '返回首页'
  },
  500: {
    url: networkError,
    message: '抱歉，服务器报告错误。',
    buttonText: '返回首页'
  },
  403: {
    url: noPermission,
    message: '抱歉，您无权访问此页面。',
    buttonText: '返回首页'
  }
}

const props = defineProps({
  type: {
    validator(value) {
      return ['404', '403', '500'].includes(value) ? value : '404'
    }
  }
})

const emit = defineEmits(['errorClick'])

const btnClick = () => {
  emit('errorClick', props.type)
}
</script>
<style lang="less" scoped>
.error-cpn {
  display: flex;
  justify-content: center;
  .content {
    text-align: center;
    img {
      width: 350px;
    }
    .info {
      font-size: 14px;
      color: var(--el-color-info);
      margin-bottom: 20px;
    }
  }
}
</style>
