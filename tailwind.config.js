/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
      },
      fontFamily: {
        "Josefin": ["Josefin Sans", ...defaultTheme.fontFamily.sans],
        "Poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
        "Montserrat": ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      "colors": {
        "blue": {
          "25": "#93DDDE",
          "50": "#EBF6FF",
          "100": "#D6EDFF",
          "200": "#ADDCFF",
          "300": "#85CAFF",
          "400": "#57B6FF",
          "500": "#2FA4FF",
          "600": "#0088F0",
          "700": "#0068B8",
          "800": "#00457A",
          "900": "#00233D",
          "950": "#143C3C"
        },
        grey: {
          "100": "#E6E6E6",
          "400": "#D9D9D9"
        },
        green: {
          "100": "#D8F2AE",
          "200": "#143C3C",
          "300": "#12B7B6",
        },
        black: {
          "100": "#505050",
          "200": "#374141"
        }
      }
    },
  },
  safelist: [
		{
			pattern:
				/(bg|text|border|ring|outline)-(yellow|blue|orange|green|teal|purple)-(50|100|200|300|400|500|600|700|800|900)/,
			variants: ['active', 'hover', 'disabled', 'focus']
		},
		{
			pattern: /(bg|text|border|ring|outline)-(shades)-(0|100)/,
			variants: ['active', 'hover', 'disabled', 'focus']
		}
	],
  plugins: [],
}
