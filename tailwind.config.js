/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "equi-primary": {
          100: "#defaea",
          200: "#bef4d4",
          300: "#8beab3",
          400: "#52d689",
          500: "#2ecc71",
          600: "#1d9c53",
          700: "#1b7a43",
          800: "#1a6139",
          900: "#175031",
          950: "#072c18",
        },
        "eqi-dark": "#27ae60",
        "equi-text": "#34495e",
      },
      fontFamily: {
        heading: ["Poppins", "serif"],
        body: ["Montserrat", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
