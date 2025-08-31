import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "", // Empty base for maximum compatibility
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
