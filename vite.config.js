import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // Project Pages serves the site from /FewAndFamilyIT/. Local dev stays at /.
  base: command === 'build' ? '/FewAndFamilyIT/' : '/',
  plugins: [react()],
}))
