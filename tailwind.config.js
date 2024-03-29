/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{},
    colors:{
      'amber': '#fef3c7',
      'bloodRed':'#7f1d1d',
      'black': '#09090b',
      'white' : '#FFFFFF'
    }
  },
  plugins: [],
}