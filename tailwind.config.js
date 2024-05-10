/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  content: ['./src/**/*.{html,js}', './**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        purple: '#67399D',
        yellow: '#F1D80C',
        peach: '#F66364',
        pale: '#F6F8F3',
        paleGray: '#DADADA',
        darkbg: '#000000b0',
        gold: '#DFA100',
        orange: '#F16607',
      },
    },
  },
  plugins: [],
};

