// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce': 'bounce 2s infinite',
        'gradient-pan': 'gradientPan 8s linear infinite',
        'float-tilt': 'floatTilt 6s ease-in-out infinite',
        'letter-pop': 'letterPop 0.5s ease both'
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientPan: {
          '0%, 100%': { 
            'background-position': '0% 50%',
            'background-size': '200% 200%'
          },
          '50%': { 
            'background-position': '100% 50%',
            'background-size': '200% 200%'
          }
        },
        floatTilt: {
          '0%, 100%': { 
            transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-5px) rotateX(5deg) rotateY(2deg)' 
          },
          '75%': { 
            transform: 'translateY(3px) rotateX(-3deg) rotateY(-1deg)' 
          }
        },
        letterPop: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8) translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
};