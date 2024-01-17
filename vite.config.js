import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/asco-vs2300-configurator/',

  build: {
    outDir: 'build', // Make sure this is set to 'build'
  },
})


