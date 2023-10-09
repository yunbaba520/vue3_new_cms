<template>
  <div></div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import router from '@/router/index'
const route = useRoute()
if (route.query.type === 'back') {
  router.replace({ path: route.query.url })
}
</script>

<style lang="scss" scoped></style>
