/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['RobotoSlab', 'sans'],
      },
      colors: {
        'custom-black': '#2A2A2A',
        'custom-white': '#D9D9D9',
        'custom-teal': '#38D6B9',
        'timeline-green': '#00D37E',
        'timeline-yellow': '#F7C839',
        'timeline-orange': '#FD9540',
        'timeline-red': '#FF3E0D',
        'timeline-blue': '#00BEFF',
        'timeline-salmon': '#FF685F',
        'timeline-purple': '#AF50FF',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '940px',
        'xl': '1080px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}