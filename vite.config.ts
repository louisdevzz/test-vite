import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from 'tailwindcss';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    nodePolyfills({
      // Include only necessary polyfills
      include: ['buffer', 'process'],
      globals: {
        Buffer: true,
        global: true,
        process: true
      }
    })
  ],
  css:{
    postcss:{
      plugins: [tailwindcss()]
    }
  },
  base: '/'
})
