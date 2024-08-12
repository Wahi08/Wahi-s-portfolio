import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '265px': '200px',
        '110px': '110px',
        '50px': '50px'
      },

      colors: {
        'bg-5': '#FFF848', //yellow
        'font-1': '#00173F', //dark blue
        'font-2': '#21516d', //dark cyan

        'grey-white':'#F8F7F4', //grey-white
        'bg-2':'#7AB2B2', //light cyan
        'bg-3':'#CDE8E5', //lighter cyan
        'bg-4':'#EEF7FF', //lightest cyan

      }
    },
  },
  plugins: [
  ],
};
export default config;

