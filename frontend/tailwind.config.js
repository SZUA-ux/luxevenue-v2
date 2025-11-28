/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': {
          light: '#E8C4B8',
          DEFAULT: '#D4AF37',
          dark: '#C9A982',
        },
        'black-primary': '#0A0A0A',
        'black-secondary': '#121212',
        'surface-dark': '#1A1A1A',
        'surface-elevated': '#242424',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        subheading: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
