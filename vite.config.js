import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Resutex/', // Coloque o nome do seu repositório
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
})
