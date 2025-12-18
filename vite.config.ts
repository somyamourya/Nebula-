
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Vital for GitHub Pages to resolve assets correctly in subfolders
  define: {
    // This allows the API_KEY to be injected during the GitHub Actions build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env': '{}' 
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    target: 'esnext', // Modern browsers for web deployment
    minify: 'esbuild',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});
