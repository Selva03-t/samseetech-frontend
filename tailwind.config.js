/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1F6FEB',
        },
        'deep-tech': '#0B3C5D',
        'teal-accent': '#0FB9B1',
        'light-cyan': '#3DDAD7',
        'bg-dark': '#0F172A',
        'gray-text': '#94A3B8',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 5px #1F6FEB' },
          'to': { boxShadow: '0 0 20px #1F6FEB' },
        },
      },
    },
  },
  plugins: [],
}