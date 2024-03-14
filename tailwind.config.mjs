/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1dd3b0",
        secondary: "#086375",
        accent: "#7bf1a8",
        disabled: "#495057",
        title: "#A2E8DD",
        background: "#3c1642",
        formLabel: "#7bf1a8",
      },
    },
  },
  plugins: [animations],
};
