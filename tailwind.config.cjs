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
      fontSize: {
        'h1': ['3rem', '4.5rem'],
        'h2': ['2.5rem', '3.75rem'],
        'h3': ['2rem', '3rem'],
        'h4': ['1.5rem', '2.25rem'],
        'h5': ['1.25rem', '1.75rem'],
        'p1': ['1.5rem', '2.25rem'],
        'p2': ['1.25rem', '1.75rem'],
        'p3': ['1rem', '1.25rem'],
        'p4': ['0.875rem', '1.125rem'],
        'title': ['1rem', '1.25rem'],
        'subtitle': ['0.875rem', '1.125rem'],
        'caption': ['0.75rem', '1rem'],
      },
      borderRadius: {
        'card': '2rem',
        'button': '9999px',
      },
    },
  },
  plugins: [],
}
