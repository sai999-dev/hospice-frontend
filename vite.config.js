import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration without proxy (since API URL comes directly from env)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
