/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "0rem",
      },
    },
    fontFamily: {
      poppins: "var(--poppins)",
      inter: "var(--inter)",
    },
    extend: {
      colors: {
        primary_white: "var(--primary_white)",
        primary_black: "var(--primary_black)",
        primary1: "var(--primary1)",
        secondary: "var(--secondary)",
        secondary1: "var(--secondary1)",
        secondary2: "var(--secondary2)",
        text: "var(--text)",
        text1: "var(--text1)",
        button1: "var(--button1)",
        button2: "var(--button2)",
        hoverButton: "var(--hoverButton)",
        hoverButton1: "var(--hoverButton1)",
        borderColor: "var(--borderColor)",
      },
    },
  },
  plugins: [],
};
