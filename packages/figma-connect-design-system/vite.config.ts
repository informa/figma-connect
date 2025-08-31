import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibMode = mode === 'lib';

  return {
    plugins: [
      react(), 
      vanillaExtractPlugin(),
      ...(isLibMode ? [dts({ 
        include: ['src'], 
        exclude: ['src/**/*.stories.tsx'] 
      })] : [])
    ],
    build: isLibMode ? {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'FigmaConnectDesignSystem',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format === 'es' ? 'es.js' : 'js'}`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    } : {
      outDir: '../dist-demo'
    }
  }
})
