import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      spacing: {
        '265px': '200px',
        '110px': '110px',
        '50px': '50px'
      },

      colors: {
        'light-yellow': '#FFF848',
        'lighter-yellow': '#FFFF99',
        'font-1': '#00173F'
      }
    },
  },
  plugins: [],
};
export default config;
