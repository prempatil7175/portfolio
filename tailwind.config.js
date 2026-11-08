/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090909',
        'background-deep': '#000000',
        'surface-dark': '#111111',
        'surface-card': '#141414',
        'surface-border': '#222222',
        accent: {
          DEFAULT: '#E50914',
          hover: '#FF1E27',
          dark: '#B00710',
          glow: 'rgba(229, 9, 20, 0.4)'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
          muted: '#666666'
        }
      },
      fontFamily: {
        heading: ['Oswald', 'Impact', 'Monument Extended', 'sans-serif'],
        body: ['Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

