/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'clock-chimes-thirteen': 'rgb(2, 31, 23)',
        'rainforest': 'rgb(1, 152, 109)',
        'chrome-yellow': '#FEA801',
        'unbleached': '#FDFAF5',
        'granulated-sugar': '#FFFBF2',
        'sheer-peach': '#FFF6E6',
        'coach-green': '#043427',
        'up-forest-green': '#053E2E',
        'caribbean-green': '#01CB92',
        'lynx-white': '#F6F9F8',
        'toasted-marshmallow': '#FFF9EB',
        'sugar-milk': '#FFFCF5'
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'serif'],
        grace: ['Covered By Your Grace', 'system-ui', 'serif'],
      }
    },
  },
  plugins: [],
}