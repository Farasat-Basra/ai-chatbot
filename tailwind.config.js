/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa",
        secondary: "rgb(212 212 216)",
        tertiary: "#3b3b3b",
      },
    },
  },
  plugins: [],
};
