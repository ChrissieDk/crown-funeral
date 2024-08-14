import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "crown-funeral";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
