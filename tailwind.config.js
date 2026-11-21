/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cini: {
          panna: '#FFF6EC',
          petrolio: '#4D93A4',
          bordeaux: '#6C2430',
          rosa: '#E8B5BC',
          oro: '#C5A059',
          marrone: '#47210F',
          // versioni calibrate per background/sfumature
          'bordeaux-dark': '#551A24',
          'petrolio-dark': '#386F7D',
          'panna-light': '#FFFDF9',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'cini-soft': '0 20px 40px -15px rgba(71, 33, 15, 0.08)',
        'cini-gold': '0 10px 30px -10px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
}
