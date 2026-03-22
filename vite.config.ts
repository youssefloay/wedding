import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Project Pages: VITE_BASE=/wedding/  |  Docker / custom host at root: VITE_BASE=/
const base = process.env.VITE_BASE ?? "/wedding/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
