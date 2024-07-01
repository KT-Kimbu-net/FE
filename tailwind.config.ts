import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      main: "#EC1C23",
      "black-900": "#000000",
      "black-800": "#262626",
      "black-700": "#525252",
      "black-600": "#797979",
      "black-500": "#909090",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
