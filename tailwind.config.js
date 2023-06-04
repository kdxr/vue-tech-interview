/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{css,vue,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "370px",
        md: "720px",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      fontFamily: {
        gloria: ["Gloria Hallelujah", "sans-serif"],
      },
      colors: {
        quiz: "#C8C8C8",
        answer: "#10153C",
      },
    },
  },
  plugins: [],
};
