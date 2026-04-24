import { defineConfig } from "vite";

export default defineConfig({
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
