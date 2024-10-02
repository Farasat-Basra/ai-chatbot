/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(212 212 216)",
        secondary: "#2b2b2b",
        tertiary: "#3b3b3b",
      },
    },
  },
  plugins: [],
};
