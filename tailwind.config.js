/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica','Arial'],
      'heading': "Roboto",
      "templateHeading": ['DM Serif Display']
    }
  },
  plugins: [],
}

