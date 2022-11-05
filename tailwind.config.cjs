/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,css,sass}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      'md': '650px',
      'lg': '980px',
      'xl': '1184px',
    },
    extend: {
      colors: {
        'n1': '#ffffff',
        'n2': '#858993',
        'n3': '#313A65',
        'n4': '#151F3F',
        'n5': '#0E1835',
        'n6': '#06102B',
        'n7': '#000000',
        'p1': '#9DA4FF',
        'p2': '#C4C8FF',
        'p3': '#6E77E9',
        's1': '#55FFAD',
        'y1': '#FFE34E',
        'y2': '#FFF385',
      },
      borderRadius: {
        'card': '2rem',
        'button': '9999px',
      },
    },
  },
  plugins: [],
}
