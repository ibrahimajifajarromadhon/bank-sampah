/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        baseColor: '#276561',
        blue: '#3E70D2',
        gray: '#C8C8C8',
        bgGray: '#D9D9D9',
        textGray: '#9A9A9A'
      },
    },
  },
  plugins: [],
}