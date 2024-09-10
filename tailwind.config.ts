import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          main: "#CFB46D",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
