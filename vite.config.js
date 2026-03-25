import { defineConfig } from 'vite' // Verification comment for git push setup
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1500 // KB (default 500)
  }
})
