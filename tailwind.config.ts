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
        seaBlue: '#4A90E2',
        seagullGray: '#D9E2EC',
        sandyGold: '#D2B48C',
      },
    },
  },
  plugins: [],
} satisfies Config;
