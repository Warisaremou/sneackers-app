/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-orange": "#ff7d1b",
        orange: "#ffac6a",
        "light-box": "#404040",
        "pure-gray": "#b5b6bb",
      },
      padding: {
        "46px": "46px",
      },
      boxShadow: {
        "3xl": "5px 5px 10px rgba(0, 0, 0, 0.3)",
      },
      width: {
        290: "290px",
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
