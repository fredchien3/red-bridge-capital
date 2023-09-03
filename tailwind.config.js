/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ss: 'AauxProRegular, sans-serif',
      ssm: 'AauxProMedium, sans-serif',
      serif: 'NotoSerifMedium, serif',
    },
    extend: {
      colors: {
        maroon: '#700000',
        beige: '#f4f2ef',
        slate: '#333333',
        jade: '#003835',
      },
    },
  },
  plugins: [],
}