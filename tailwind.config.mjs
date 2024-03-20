/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#042438",
        primary: "#5790AB",
        secondary: "#064469",
        accent: "#9CCDDB",
        disabled: "#D0D7E1",
        title: "#A2E8DD",
        formLabel: "#7bf1a8",
      },
      
    },
  },
  plugins: [animations],
};
