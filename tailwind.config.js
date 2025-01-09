/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        questrial: ["Questrial", "sans-serif"],
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      fontWeight: {
        extraLight: 200, // Custom weight alias for 200
        light: 300, // Light weight
        regular: 400, // Normal weight
        medium: 500, // Medium weight
        bold: 700, // Bold weight
        extraBold: 800, // Extra bold weight
        superBold: 950,
      },
    },
  },
  animation: {
    spin: "spin 2s linear infinite",
  },
  plugins: [],
};
