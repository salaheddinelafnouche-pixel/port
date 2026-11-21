import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/hiking-mode/prototype/',
  build: {
    outDir: path.resolve(__dirname, '../../../public/hiking-mode/prototype'),
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
})
