# 使用vite创建vue3项目
```bash
npm create vite@latest
```
# 使用 jsx 语法时，需要安装jsx解析的插件
```bash
npm install @vitejs/plugin-vue-jsx
```

### 如何使用
- 在src文件下创建 App.jsx 文件
- 编辑 App.jsx

``` jsx
import {defineComponent} from 'vue'
export default defineComponent ({
    setup(){
        return ()=>{
            return <div> 这是 vue3 中 jsx 的语法</div>
        }
    }
})
```


# css 处理
### vue3 支持最新的变量声明
```css
:root{
    /* 命名空间 */
    --main-bg-color:green;
}
.color{
    /* 使用变量名称 */
    color: var(--main-bg-color);
}
```

### 使用PostCss
### 使用css-modules  
- https://www.ruanyifeng.com/blog/2016/06/css_modules.html
- ### 在styles文件下创建一个以*.module.css 为结尾的文件夹
```jsx
...
import classes from '@styles/text.module.css'
...
<p className={`${classes.moduleClass}`}>这是一个数字：{count.value}</p>

```
### 使用vite 中的 @import alias 创建路劲便捷引入
### 使用css pre-processors(CSS 预处理器)
- 需要安装需要使用的预编译工具：less sass stylus


# TypeScript 集成
安装typeScript
```bash
npm install typescript

tsc --init 创建tsconfig.json配置文件
```
```json
tsc --noEmit 表示校验
"build": "tsc --noEmit && vite build",
```
### 使用vue-tsc for SFC 对vue中ts的进行校验
安装 vue-tsc
```bash
npm install vue-tsc
```
