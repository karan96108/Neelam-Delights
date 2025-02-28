import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    port: 8080,
    host: true
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/analytics',
      'firebase/storage',
      'react',
      'react-dom',
      'yup',
      'property-expr',
      'tiny-case',
      'toposort'
    ],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/analytics',
            'firebase/storage',
            'yup',
            'property-expr',
            'tiny-case',
            'toposort'
          ]
        }
      }
    }
  },
}));
