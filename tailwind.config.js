/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: 'body, sans-serif',
      header: 'header, sans-serif',
      tc: 'tc, serif',
      sc: 'sc, serif',
    },
    extend: {
      colors: {
        maroon: '#700000',
        beige: '#f4f2ef',
        slate: '#333333',
        jade: '#003835',
      },
      boxShadow: {
        'topScroll': 'inset 0 12px 8px -5px rgb(200 200 200)',
        'betweenScroll': 'inset 0 12px 8px -5px rgb(200 200 200), inset 0 -12px 8px -5px rgb(150 150 150)',
        'bottomScroll': 'inset 0 -12px 8px -5px rgb(150 150 150)',
      }
    },
  },
  plugins: [],
}