/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      'sm':{ 'max':'640px'},
      'md':{ 'max':'800px'},
      'lg': '960px',
      'xl': '1200px',
    },
    extend: {
      height: {
        '90': '90vh'
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#C70039',
      },
      backgroundImage: {

        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-99.5%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};