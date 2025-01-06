/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
      questrial: ['Questrial', 'sans-serif'],
    },    
  },
  keyframes: {
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
  },
  animation: {
    spin: 'spin 2s linear infinite',
  },
  plugins: [],
}