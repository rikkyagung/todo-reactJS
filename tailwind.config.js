/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            "Bright-Gray": "#EBEBEB",
            "palatinate-blue": "#473DED",
            "ghost-white": "#F8F8FC",
            turquoise: "#55efc4",
            "maastrich-blue": "#082032",
         },
         fontFamily: {
            roboto: "'Roboto Mono', monospace",
         },
      },
   },
   plugins: [],
};
