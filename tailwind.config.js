/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cd-navy':      '#0D1B2A',
        'cd-blue':      '#1B3358',
        'cd-gold':      '#C9A84C',
        'cd-gold-light': '#F5E6C0',
        'cd-light-bg':  '#0D1B2A', // Midnight usa navy como fundo principal
        'cd-white':     '#FFFFFF',
        'cd-dark':      '#1A1A2E',
        'cd-gray':      '#6B7280',
        'cd-divider':   '#1B3358',
        'cd-red':       '#DC2626',
        // Aliases para compatibilidade legada
        'brand-navy':   '#0D1B2A',
        'brand-gold':   '#C9A84C',
        'cd-bg':        '#0D1B2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
