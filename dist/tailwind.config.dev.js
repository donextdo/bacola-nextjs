"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'ff-headings': ['Dosis', 'sans-serif']
    },
    extend: {
      placeItems: ['hover', 'focus']
    }
  },
  plugins: []
};
//# sourceMappingURL=tailwind.config.dev.js.map
