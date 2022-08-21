/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '90':'90'
      },
      colors:{
        'main':'#80bc50',
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      },
      textColor:{
        'main':'#80bc50',
        'Dgreen':'#006941'
      },
      backgroundColor:{
        'main':'#80bc50',
        'brown':'#FAF3E3',
        'Dgreen':'#006941'
      },
      backgroundImage:{
        'products':'url("/productBg.jpg")',
        'ban-1':'url("/ban-1.jpg")',
        'ban-2':'url("/ban-2.jpg")',
        'ban-3':'url("/ban-3.jpg")',
        'ban-4':'url("/ban-4.jpg")',
        'cooperative':'url("/coop.jpeg")',
        'about':'url("/about.jpg")',
        'wish':'url("/wish.jpg")',
        'card':'url("/card.jpg")',
      },
      
    },
  },
  plugins: [],
}
