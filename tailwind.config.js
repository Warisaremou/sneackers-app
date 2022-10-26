/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-orange": "#ff7d1b",
        "orange": "#ffac6a",
        "light-box": "#404040",
      },
    },
    fontFamily: {
      poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "4rem",
    },
  },
  plugins: [],
};
