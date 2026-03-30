import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vercel deployment root
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
