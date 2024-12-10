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
      "/api/pol360/proxy": {
        target: "https://web09.pol360.co.za/api/360API.php",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/pol360\/proxy/, ""),
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            // Preserve authorization headers
            if (req.headers.authorization) {
              proxyReq.setHeader("Authorization", req.headers.authorization);
            }
            if (req.headers["x-authorization-token"]) {
              proxyReq.setHeader(
                "x-authorization-token",
                req.headers["x-authorization-token"]
              );
            }
            // Add content type headers
            proxyReq.setHeader("Content-Type", "application/json");
            proxyReq.setHeader("Accept", "application/json");
          });
        },
      },
    },
  },
});
