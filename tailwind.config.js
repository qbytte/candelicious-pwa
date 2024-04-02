/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      rose: "#f09ba3",
      light_rose: "#f5edf2",
      lighter_rose: "#ffc2c8",
      blue: "#87bbea",
      light_blue: "#cee8ea",
      dark_blue: "#0b1a3b",
      purple: "#6867a1",
      green: "#a7cf87",
      light_green: "#d6f1D5",
      red: "#e57777",
      orange: "#e59861",
      yellow: "#eec746",
      brown: "#6b5151",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      sans: ["VT323", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
