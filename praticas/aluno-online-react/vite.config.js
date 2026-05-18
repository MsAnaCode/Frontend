import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite' // <-- 1. Importou aqui
=======
import tailwindcss from '@tailwindcss/vite' // <-- Importe o plugin aqui
>>>>>>> 281a770e1821c02ed5fa01d0be7056ce8394c78c

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD
    tailwindcss(), // <-- 2. Adicionou aqui
  ],
=======
    tailwindcss()
  ],
  // Configuração do Servidor para Docker  
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5173,
    },
  },
>>>>>>> 281a770e1821c02ed5fa01d0be7056ce8394c78c
})