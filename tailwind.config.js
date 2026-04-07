/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1F6FEB',
        'primary-blue-dark': '#1558C0',
        'deep-tech': '#0B1D3A',
        'teal-accent': '#0FB9B1',
        'light-cyan': '#3DDAD7',
        'bg-dark': '#0F172A',
        'bg-card': 'rgba(255,255,255,0.04)',
        'gray-text': '#94A3B8',
        'gray-light': '#CBD5E1',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 10px rgba(31,111,235,0.3), 0 0 20px rgba(31,111,235,0.1)' },
          'to': { boxShadow: '0 0 25px rgba(31,111,235,0.6), 0 0 50px rgba(31,111,235,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}