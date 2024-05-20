import { createApp } from 'vue'
import pinia from './stores'
import registerIcons from './global/register-icons.js'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.less'
import useAppConfig from '@/stores/appConfig/index'

const app = createApp(App)

// 全局注册拖拽指令
import dragPosition from './directive/dragPosition/dragPosition.js'
app.directive('dragPosition', dragPosition)

app.use(registerIcons)
app.use(router)

app.use(pinia)
const appConfigStore = useAppConfig()
appConfigStore.handlerRefresh()
app.mount('#app')
