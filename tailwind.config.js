/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      boxShadow: {
        customShadow: "10px -2px 20px 2px rgb(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
