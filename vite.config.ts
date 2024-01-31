import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr(), Unfonts({
    custom: {
      display: 'swap',
      families: {
        'Product Sans': {
          src: './assets/fonts/ProductSans*',
          transform(font) {
            if (font.basename === 'ProductSans-Bold')
              font.weight = 700

            return font
          },
        },
      }
    }
  })],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './Components'),
      '@api': path.resolve(__dirname, './Components/APIs'),
      '@Providers': path.resolve(__dirname, './Components/Providers'),
      '@UI': path.resolve(__dirname, './Components/UI')


    }
  }
})
