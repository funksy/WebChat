/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        userjoin: 'userjoin .5s ease-in-out',
      },
      keyframes: {
        userjoin: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '12.5%': {
            transform: 'rotate(-2.5deg)',
          },
          '25%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(2.5deg)',
          },
          '62.5%': {
            transform: 'rotate(0deg)',
          },
          '75%': {
            transform: 'rotate(-2.5deg)',
          },
          '87.5%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      fontFamily: {
        pop: ['Share Tech Mono']
      },
      colors: {
        custom: {
          lb: '#025E73',
          db: '#011F26',
          mauve: '#A5A692',
          beige: '#BFB78F',
          gold: '#F2A71B'
        }
      }
    }
  },
  plugins: []
}
