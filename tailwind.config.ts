import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#dcfce7",
          300: "#86efac", // Add this
          400: "#4ade80", // Add this
          500: "#22c55e",
          600: "#16a34a",
          900: "#14532d",
        "blurple": "#737efa",
        "blurple-accent": "#616eff"
      },
    },
  },
  plugins: [],
},
};
export default config;
