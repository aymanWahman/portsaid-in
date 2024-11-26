import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // تفعيل الوضع الداكن بناءً على الـ class
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        seaBlue: "#4A90E2",
        seagullGray: "#D9E2EC",
        sandyGold: "#D2B48C",
        greenN: "#2E7D32",
      },
      transitionTimingFunction: {
        "in-out-soft": "ease-in-out",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
