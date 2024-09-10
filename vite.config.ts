import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const repoName = "crown-funeral";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
