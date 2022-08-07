/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      "colors": {
        "blue": {
          "50": "#EBF6FF",
          "100": "#D6EDFF",
          "200": "#ADDCFF",
          "300": "#85CAFF",
          "400": "#57B6FF",
          "500": "#2FA4FF",
          "600": "#0088F0",
          "700": "#0068B8",
          "800": "#00457A",
          "900": "#00233D"
        },
        grey: {
          "100": "#E6E6E6"
      },
      }
    },
  },
  plugins: [],
}
