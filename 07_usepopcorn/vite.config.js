import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@images": "/src/assets/images",
      "@styles": "/src/assets/styles",
      "@auth": "/src/auth",
      "@pass": "/src/pass",
      "@components": "/src/components",
      "@core": "/src/core",
      "@pages": "/src/pages",
      "@services": "/src/services",
      "@store": "/src/store"     
    }
  },
  server: {
    port: 3000,
    open: true,
    hmr: true
  },
  preview: {
    port: 8080,
    open: true
  },

  build: {
        rollupOptions: {
            output:{
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})
