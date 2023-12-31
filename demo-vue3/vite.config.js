import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/styles/test.scss";`,
      },
    },
  },
  resolve:{
    alias:{
      '@styles':"src/styles",
      '@assets':"/src/assets"
    }
  }
})
