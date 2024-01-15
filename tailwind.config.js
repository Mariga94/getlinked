/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Montserrat':['Montserrat', 'sans-serif'],
        'ClashDisplay-Regular':['ClashDisplay-Regular', 'sans-serif']
      }
    },
  },
  plugins: [],
}
