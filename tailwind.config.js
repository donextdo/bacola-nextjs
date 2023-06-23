/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "ff-headings": ["Dosis", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#824f3c',      // Replace with your primary color
        secondary: '#f58321',    // Replace with your secondary color
      },
      placeItems: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
