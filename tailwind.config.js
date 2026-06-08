/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#FFFFFF',
        'brand-navy': '#0F172A',
        'brand-gold': '#FFCC00',
        'brand-gray': '#F8FAFC',
        'brand-text-dark': '#1E293B',
        'brand-slate': '#455A75',
        'brand-bronze': '#77512D',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['League Spartan', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 50px rgba(0, 0, 0, 0.05)',
        'ultra': '0 30px 100px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
