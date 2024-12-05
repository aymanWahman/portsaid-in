/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        seaBlue: '#1e3a8a',
        sandyGold: '#fbbf24',
      },
      fontFamily: {
        cairo: ['var(--font-cairo)'],
        tajawal: ['var(--font-tajawal)'],
      },
    },
  },
  plugins: [],
};
