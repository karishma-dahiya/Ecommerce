/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary: ' #FFFFFF',
      secondary:'#FFE475',
      green: '#40d589',
      gray: '#B6BAC3',
      lightgray : '#737D94',
      disabled: '#EDEDED',
      blue: '#5DA9E9',
    },
    fontFamily:{
      'mono':['Montserrat Alternates', 'sans-serif'],
    },
    screens:{
      'sm': {'max' : '640px'},
      'lg': {'min' : '1024px'}
    },
    extend: {},
  },
  plugins: [],
}