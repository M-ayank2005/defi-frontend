/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#b320e8' }, 
          '50%': { color: '#56d63c' }, 
        },
      },
      animation: {
        colorChange: 'colorChange 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
