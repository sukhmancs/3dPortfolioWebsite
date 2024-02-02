/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ['Poppins', "sans-serif"]
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        swipeAnimation: 'swipeAnimation 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        circleAnimation: 'circleAnimation 1s ease-in-out infinite',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        swipeAnimation: {
          '0%': { transform: 'translateX(-70%)' },
          '50%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(-70%)' },
        },
        circleAnimation: {
          '0%': { transform: 'scale(0.5)', opacity: '0.5' },
          '50%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}