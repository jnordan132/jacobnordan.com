import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the root of jacobnordan.com, so base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
