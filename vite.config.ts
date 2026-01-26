import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      entryRoot: 'src',
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'react/index': resolve(__dirname, 'src/react/index.ts'),
        'vue/index': resolve(__dirname, 'src/vue/index.ts'),
        'tailwind/index': resolve(__dirname, 'src/tailwind/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'mjs' : 'js';
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'vue',
        'tailwindcss',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          vue: 'Vue',
          tailwindcss: 'tailwindcss',
        },
        preserveModules: false,
        exports: 'named',
      },
    },
    sourcemap: true,
    minify: false,
  },
});
