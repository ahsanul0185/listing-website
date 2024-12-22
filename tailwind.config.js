/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryDark: "var(--color-primaryDark)",
        gold: "#ffc107"
      },
      fontFamily: {
        roboto : [ 'Roboto', 'sans-serif']
      },
    },
  },
  plugins: [],
}