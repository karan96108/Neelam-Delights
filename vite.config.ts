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
      "react": path.resolve(__dirname, "./node_modules/react"),
    },
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
    ]
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          firebase: [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/analytics',
            'firebase/storage'
          ],
          react: ['react', 'react-dom'],
          validation: ['yup', 'property-expr', 'tiny-case', 'toposort']
        },
      },
    },
    commonjsOptions: {
      include: [/firebase/, /react/, /yup/, /property-expr/, /tiny-case/, /toposort/],
      transformMixedEsModules: true,
      esmExternals: true
    }
  },
}));
