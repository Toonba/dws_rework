/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        headerBlueStart: 'rgb(10,48,78)',
        headerBlueEnd: 'rgb(7,45,75)'
      },
      fontFamily: {
        bagel: ['Bagel Fat One']
      },
      keyframes: {
        moovingGradient: {
          from: { backgroundPosition: '0% center' },
          to: { backgroundPosition: '-200% center' }
        }
      },
      animation: {
        moovingGradient: 'moovingGradient 3s linear infinite'
      }
    }
  },
  plugins: []
}
