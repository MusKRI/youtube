/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ytBg: "#2A2E32",
        feedBg: "#232629",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
