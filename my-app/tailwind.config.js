/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1023px" },
      },
    },
  },
  plugins: [],
};
