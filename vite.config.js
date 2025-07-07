import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // ensure all your built assets are served under /Gowthamportfolio/
  base: '/Gowthamportfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
