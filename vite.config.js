import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração inicial padrão para projetos React com Vite
export default defineConfig({
  base: '/',
  plugins: [react()]
  build: {
    rollupOptions: {
      external: ['react-icons/fa'],
    },
  },
});
