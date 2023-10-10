import { createApp } from 'vue'
import './style.css' // 公共样式
import '@styles/test.scss'
import App from './App'
console.log("ENV",JSON.stringify(import.meta.env))
createApp(App).mount('#app')
