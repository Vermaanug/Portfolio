/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ['DM Serif Text', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
      screens: {
        'custom-lg': '1175px', 
      },
    },
  },
  plugins: [],
};
