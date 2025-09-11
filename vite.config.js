import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Use relative paths for better compatibility
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
