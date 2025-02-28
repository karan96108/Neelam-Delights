import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
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
    rollupOptions: {
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
