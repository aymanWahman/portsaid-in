import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        seaBlue: {
          light: '#2A52BE', 
          DEFAULT: '#4682B4',
          dark: '#4682B4',
        },
        seagullGray: "#D9E2EC",
        sandyGold: {
          light: '#D4B483', 
          DEFAULT: '#C19A6B',
          dark: '#A67B5B',
        },
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
}

export default config
