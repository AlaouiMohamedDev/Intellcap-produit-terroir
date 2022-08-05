/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}
