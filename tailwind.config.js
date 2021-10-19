const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat'],
        bebas: ['Bebas Neue'],
        sans: ['Inter', 'Helvetica', 'Arial', ...fontFamily.sans],
      },
      colors: {
        main: {
          yellow: '#FEE440',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
