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
        'cn1': '#ffffff',
        'cn2': '#858993',
        'cn3': '#313A65',
        'cn4': '#151F3F',
        'cn5': '#0E1835',
        'cn6': '#06102B',
        'cn7': '#000000',
        'cp1': '#9DA4FF',
        'cp2': '#C4C8FF',
        'cp3': '#6E77E9',
        'cs1': '#55FFAD',
        'cy1': '#FFE34E',
        'cy2': '#FFF385',
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
      dropShadow: {
        'white': '0 0px 10px rgba(255, 255, 255, 0.6)',
      },
      spacing: {
        '15': '3.75rem',  // [60px]
        '35': '8.75rem',  // [140px]
      },
    },
  },
  plugins: [],
}
