import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  esbuild: {
    legalComments: "none",
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { pure: true }]],
      },
    }),
  ],
  base : "/Portpolio",
  
})

