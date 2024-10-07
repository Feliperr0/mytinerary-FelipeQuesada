/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1) translateX(-50%)' },
          '100%': { transform: 'scale(1.1) translateX(0)' },
        },
      },
      animation: {
        'zoom-left-to-right': 'zoom 5s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}