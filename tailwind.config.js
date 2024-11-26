/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wow-background': "url('https://www.triviantes.com/wp-content/uploads/2022/11/que-hacer-en-bogota-1.jpg')", 
      },
      boxShadow: {
        'glow': '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffb700, 0 0 40px #ffb700',
      },
      textShadow: {
        'glow': '0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffb700, 0 0 40px #ffb700',
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'zoom-out': 'zoomOut 10s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
};
