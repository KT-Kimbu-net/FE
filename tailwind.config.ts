import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
    extend: {
      keyframes: {
        scoreAnimation: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
        winScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        expandBackground: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
        fadeOut: "fadeOut 0.5s ease-out",
        scoreAnimation: "scoreAnimation 0.5s ease-in-out",
        slideOutRight: "slideOutRight 0.3s ease-out",
        slideInLeft: "slideInLeft 0.3s ease-out",
        scaleDown: "scaleDown 0.5s ease-in-out",
        winScale: "winScale 2s infinite",
        expandBackground: "expandBackground 0.5s ease-out forwards",
      },
      colors: {
        main: "#EC1C23",
        "gray-900": "#000000",
        "gray-800": "#262626",
        "gray-700": "#525252",
        "gray-600": "#797979",
        "gray-500": "#909090",
      },
      backgroundImage: {
        subHeaderImg: 'url("/img/subHeaderImg.png")',
      },
      fontSize: {
        responsive_text: "clamp(12px, 3vw, 36px)",
        responsive_title: "clamp(24px, 3vw, 72px)",
        // 다른 폰트 크기 추가 가능
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
