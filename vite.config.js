import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// 👇 yahan apne repo ka naam zaroor likhna hai
export default defineConfig({
  plugins: [react()],
  base: "/my-react-app/",
})


