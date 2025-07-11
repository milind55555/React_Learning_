import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'   // ⬅️ new plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwind()],
})
