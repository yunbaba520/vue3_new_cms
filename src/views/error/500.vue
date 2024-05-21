<template>
  <ErrorCpn type="500" @errorClick="handlerError"></ErrorCpn>
</template>

<script setup>
import ErrorCpn from '../../components/error/index.vue'
function handlerError() {
  console.log('按钮点击')
}
</script>

<style lang="less" scoped></style>
