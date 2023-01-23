/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1536px' },

      'xl': { 'max': '1280px' },

      'lg': { 'max': '1024px' },

      'md': { 'max': '768px' },

      'sm': { 'max': '640px' },
    },
    extend: {
      colors: {
        'lgreen': '#51F129',
        'glabel': '#8E909D',
        'inputbg': '#323645',
        'addpanel': '#282A37',
        'pnumber': '#4CA536',
        'nnumber': '#DF1414',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    }
  },
  plugins: [],
}