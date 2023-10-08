import { createApp } from 'vue'
import pinia from './stores'
import registerIcons from './global/register-icons.js'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.less'
const app = createApp(App)
app.use(registerIcons)
app.use(pinia)
app.use(router)

app.mount('#app')
