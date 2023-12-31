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
### client types
```json
在tsconfig.json中编辑引入
compilerOptions:{
    ...,
    "types": ["vite/client"],           
}
```
配置完成之后，就可以使用上面的属性
```ts
import.meta.env
import.meta.glob
import.meta.hot
import.meta.url
```


### 静态文件处理
导入静态资源图片
```jsx
import image01 from "@assets/image01.jpg"
<img src={image01} alt="" />
```

### 配置eslint和.prettierrc
安装和配置 eslint
```js 
npm init @eslint/config
npm install eslint-config-standard eslint-plugin-import eslint-plugin-promise eslint-plugin-node -D
```


### 环境变量
通过 import.mate.env 来判断项目的运行环境
#### 属性：
- MODE
- BASE_URL
- PROD
- DEV
在main.js 中编辑
```js
console.log("ENV",import.meta.env)
输出：
{
    "BASE_URL":"/",
    "MODE":"development",
    "DEV":true,
    "PROD":false,
    "SSR":false
}
```
### 自定义环境变量
通过创建 .env 文件
```js
VITE_TITLE = "自定义标题" // 需要以 VITE_ 为开头的文字进行命名，否则为undefine
console.log(import.meta.env.VITE_TITLE) // 输出结果为 "自定义标题"

```
#### 创建 .env.development （开发环境）
#### 创建 .env.production （正式环境）

- 不同的环境 ，vite会加载不同的文件
