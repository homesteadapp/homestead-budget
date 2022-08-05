/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
