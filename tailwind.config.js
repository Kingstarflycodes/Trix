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
        purple: '#67399D',
        gold: '#F8E231',
        silver: '#C7C5B8',
        bronze: "#A87900",
        gray: '#555555',
        mgray: '#D6D1D5',
        lgray: '#F8F7F8',
        green: '#03543F',
        lgreen: '#DEF7EC',
        orange: '#ED8936',
        lorange: '#FEEBC8',
        Hgrey: '#E5E5E5',
        Dpurple: '#0A0612',
      }
    },
  },
  plugins: [],
};

