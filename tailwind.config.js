/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F3F6FC",
          100: "#E6EDF8",
          200: "#C7D9F0",
          300: "#95BAE4",
          400: "#5C95D4",
          500: "#3777C0",
          600: "#275DA2",
          700: "#214B83",
          800: "#1F416D",
          900: "#1D3557",
          950: "#14243D",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
