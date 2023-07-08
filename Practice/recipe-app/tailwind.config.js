/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      '20': 'repeat(auto-fit,minmax(20rem,1fr))'
    },
  },
  plugins: [],
}