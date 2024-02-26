/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': '#ED735D',
      'yellow': '#F6C768',
      'white': '#FEF7EE',
      'green': '#BEE3CC',
      'black': '#111315',
      'gray': '#1B1D1F',
      'gray-light': '#6F757C',
    },
    fontFamily: {
      "dm-sans": ['DM Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

