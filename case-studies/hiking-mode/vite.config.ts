import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/hiking-mode/',
  build: {
    outDir: path.resolve(__dirname, '../../public/hiking-mode'),
    // The Hi-Fi prototype is built into public/hiking-mode/prototype.
    // Emptying this folder would delete that sibling output.
    emptyOutDir: false,
  },
  server: {
    port: 5174,
  },
  preview: {
    port: 5174,
  },
})
