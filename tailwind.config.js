/** @type {import('tailwindcss').Config} */
const { default: daisyui } = require("daisyui");

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

