import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/posts': {
        target: 'http://localhost:3000/api/posts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/posts/, ''),
      },
      '/users': {
        target: 'http://localhost:3000/api/users',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/users/, ''),
      },
      '/auth': {
        target: 'http://localhost:3000/api/auth',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
      '/upload': {
        target: 'http://localhost:3000/api/upload',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, ''),
      },
    },
  },
})
