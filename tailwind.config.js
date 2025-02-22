/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          mint: "#B7E4E1",
          yellow: "#F5C84C",
          black: "#000000",
        },
        secondary: {
          coral: "#FF6B6B",
          peach: "#FFB4A2",
          purple: "#B5838D",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
