// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'slow-bounce': 'slowBounce 4s ease-in-out infinite',
      },
    }
    
  },
  plugins: [],
};
