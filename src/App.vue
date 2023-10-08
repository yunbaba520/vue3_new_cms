<template>
  <RouterView :class="greyMode ? 'app-config-grey-mode' : ''" />
</template>

<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import useAppConfig from './stores/appConfig/index'
const appConfigStore = useAppConfig()
const greyMode = computed(() => appConfigStore.greyMode)
</script>

<style scoped>
.app-config-grey-mode {
  filter: grayscale(100%);
}
</style>
