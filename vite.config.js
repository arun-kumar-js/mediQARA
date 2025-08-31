import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/mediQARA/", // For custom domain, keep '/' ; for project pages use '/repo-name/'
});
