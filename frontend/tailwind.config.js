/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00ADB5",
        "secondary": "#DAE0E6;"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
