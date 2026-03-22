import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Project Pages URL: https://<user>.github.io/<repo>/
export default defineConfig({
  base: "/wedding/",
  plugins: [react(), tailwindcss()],
});
