/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#134B70",
        secondary: "#508C9B",
        light: "#EEEEEE",
        dark: "#201E43",
      },
      fontFamily: {
        PoppinsBold: "Poppins-Bold, sans-serif",
        PoppinsSemiBold: "Poppins-SemiBold, sans-serif",
        PoppinsMedium: "Poppins-Medium, sans-serif",
        Poppins: "Poppins-Regular, sans-serif",
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        xxsm: "320px",
        // => @media (min-width: 320px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
    plugins: [],
  },
};
