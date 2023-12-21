/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: "#393e44",
        transparent: "#000000b9"
      }
    },
  },
  plugins: [require("daisyui")],
}

