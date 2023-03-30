/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{jsx, js, html}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
  },
  plugins: [],
};

/* export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} */
