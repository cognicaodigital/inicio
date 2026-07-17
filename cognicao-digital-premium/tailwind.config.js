/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#080F1A',
        'brand-navy-card': '#0E1626',
        'brand-blue-metallic': '#1D4ED8',
        'brand-electric': '#00D2FF',
        'brand-silver': '#94A3B8',
        'brand-chrome-light': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['League Spartan', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.3)',
        'glow-blue': '0 0 25px rgba(0, 210, 255, 0.15)',
        'glow-cobalt': '0 0 30px rgba(29, 78, 216, 0.25)',
      }
    },
  },
  plugins: [],
}