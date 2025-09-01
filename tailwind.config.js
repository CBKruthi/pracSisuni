/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'hero-dark': '#0a0a0a',
        'hero-blue': '#00d4ff',
        'hero-green': '#00ff9d',
        'light-blue': '#d1eaff',
        'dark-blue': '#0f4c75',
        'card-blue': '#004aad',
        'card-orange': '#f57c00',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease forwards',
        'slide-in': 'slideIn 1.5s ease forwards',
        'fade-up': 'fadeUp 1.5s ease forwards',
        'bounce-custom': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}