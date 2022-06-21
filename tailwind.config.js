/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            "Yankees-Blue": "#202f3b",
            "Bright-Gray": "#EBEBEB",
         },
         fontFamily: {
            roboto: "'Roboto Mono', monospace",
         },
      },
   },
   plugins: [],
};
