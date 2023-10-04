/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_purple: "#383ae4",
        dark_purple: "#27289f",
        deactive_gray: "#ecebfb",
        main_bg: "#f5f5fe",
        sec_bg: "#ffffff",
        main_text: "#40403f",
        sec_text: "#2a3957",
      },
    },
  },
  plugins: [],
};
