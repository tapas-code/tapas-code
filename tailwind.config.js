/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(66, 153, 225, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(66, 153, 225, 0.8)' }
        }
      }
    },
  },
  plugins: [require('daisyui')],
};