import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production configuration for Render deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
  },
})

