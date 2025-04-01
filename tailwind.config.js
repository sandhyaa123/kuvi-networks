/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.5s ease forwards",
        hideText: "hideText 0.5s ease forwards",
        slideDown: "slideDown 0.5s ease-in-out",

      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-50%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        hideText: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideDown: {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
    fontFamily: {
      satoshi: ['Satoshi', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}