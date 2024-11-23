import type { Config } from "tailwindcss";

export default {
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
      },
      transitionTimingFunction: {
        "in-out-soft": "ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
