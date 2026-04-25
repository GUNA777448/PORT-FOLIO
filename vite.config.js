import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: "localhost",
    port: 5173,
    strictPort: false,
  },
  esbuild: {
    jsxInject: `import React from "react"`,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, "/");
          if (normalizedId.includes("node_modules/three")) {
            return "three";
          }
          if (normalizedId.includes("node_modules/gsap")) {
            return "gsap";
          }
          if (normalizedId.includes("/src/")) {
            return "app";
          }
          return undefined;
        },
      },
    },
  },
});
