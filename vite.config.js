import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    // Tối ưu hóa kích thước bundle
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Tối ưu rollup output
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          animate: ['animate.css'],
        },
      },
    },
    // Bật source map cho production
    sourcemap: false,
    // Chism threshold
    chunkSizeWarningLimit: 600,
  },
  // Tối ưu dev server
  server: {
    middlewareMode: false,
    hmr: true,
  },
})
