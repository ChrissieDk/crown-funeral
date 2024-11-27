import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  envDir: "./",
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  server: {
    proxy: {
      "/pol360": {
        target: "https://web09.pol360.co.za",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pol360/, ""),
        secure: false,
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            // Ensure headers are properly set
            const authHeader = req.headers["authorization"];
            if (authHeader) {
              proxyReq.setHeader("Authorization", authHeader);
            }
          });
        },
      },
    },
  },
});
