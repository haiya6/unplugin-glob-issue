import { defineConfig } from 'vite'
import UnpluginGlob from 'unplugin-glob/vite'

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true
  },
  plugins: [
    UnpluginGlob({
      dts: true
    })
  ]
})