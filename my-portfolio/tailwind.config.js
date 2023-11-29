/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: "#393e44"
      }
    },
  },
  plugins: [require("daisyui")],
}

