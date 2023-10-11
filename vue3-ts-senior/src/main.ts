import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 导入全局文件夹
const globModules = import.meta.glob('./globs/*')
console.log("globModules",globModules)

// 遍历 globModules 
Object.entries(globModules).forEach(([k,v])=>{ 
    v().then(mod => {
        console.log(k+":" +mod.default)
    })
})
createApp(App).mount('#app')
