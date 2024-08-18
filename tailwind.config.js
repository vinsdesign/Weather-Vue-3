/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#134B70",
        secondary: "#508C9B",
        light: "#508C9B",
        dark: "#201E43",
      },
    },
  },
  plugins: [],
};
