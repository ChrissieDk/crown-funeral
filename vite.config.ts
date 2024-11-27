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
      "/pol360/api": {
        // Make this more specific to match your API path
        target: "https://web09.pol360.co.za",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pol360\/api/, "/api"), // Adjust rewrite to match full path
        secure: false,
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            // Forward all necessary headers
            if (req.headers["authorization"]) {
              proxyReq.setHeader("Authorization", req.headers["authorization"]);
            }
            if (req.headers["x-authorization-token"]) {
              proxyReq.setHeader(
                "x-authorization-token",
                req.headers["x-authorization-token"]
              );
            }
            // Ensure content-type is set
            proxyReq.setHeader("Content-Type", "application/json");
            proxyReq.setHeader("Accept", "application/json");
          });
        },
      },
    },
  },
});
