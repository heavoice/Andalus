import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        secular: "var(--font-secular-one), sans-serif",
        didact: "var(--font-didact-gothic), sans-serif",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
