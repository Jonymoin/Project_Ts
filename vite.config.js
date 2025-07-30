import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // আগের './' এর পরিবর্তে absolute path ব্যবহার করছি

  plugins: [
    react(),
  ],
  build: {
    cssCodeSplit: false, // সব CSS একসাথে bundle হবে
  }
})
