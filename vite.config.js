import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/


const isGitHubPages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({
  plugins: [
react(), 
tailwindcss(),
],
base: isGitHubPages ? '/68565_gruszeczka/' : '/',//agregado para que ande github pages
});
