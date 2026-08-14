import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // The @base44/vite-plugin used to provide this alias implicitly.
    // Now that it's removed, it needs to be declared explicitly --
    // matches the "@/*" -> "./src/*" mapping in jsconfig.json.
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});