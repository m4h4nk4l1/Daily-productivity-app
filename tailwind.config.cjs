/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shan: ["Shantell Sans", "cursive"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
