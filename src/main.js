import { createApp } from 'vue'
import App from './App.vue'
import Router from "@/router";

// 引入阿里字体图标库
import '@/assets/font/iconfont.css'
const app = createApp(App)
app.use(Router)
app.mount('#app')
