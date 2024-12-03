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
      "/api/360API.php": {
        target: "https://web09.pol360.co.za",
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on("proxyReq", (proxyReq, req, _res) => {
            if (req.headers.authorization) {
              proxyReq.setHeader("Authorization", req.headers.authorization);
            }
            if (req.headers["x-authorization-token"]) {
              proxyReq.setHeader(
                "x-authorization-token",
                req.headers["x-authorization-token"]
              );
            }
          });
        },
      },
    },
  },
});
