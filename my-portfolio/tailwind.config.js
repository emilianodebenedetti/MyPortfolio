/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        grey: "#393e44",
        transparent: "#000000b9",
        violet: "rgb(23, 41, 141)",
        sky:"rgb(59, 130, 200)"
      }
    },
  },
  plugins: [require("daisyui")],
}

