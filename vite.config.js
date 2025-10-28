import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

// 👇 yahan apne repo ka naam zaroor likhna hai
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/my-react-app/",
})


