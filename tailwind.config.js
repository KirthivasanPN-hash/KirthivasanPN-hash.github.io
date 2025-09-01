/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'code-bg': '#0d1117',
        'code-surface': '#161b22',
        'code-border': '#30363d',
        'code-text': '#c9d1d9',
        'code-comment': '#8b949e',
        'code-keyword': '#ff7b72',
        'code-string': '#a5d6ff',
        'code-number': '#79c0ff',
        'code-function': '#d2a8ff',
        'code-variable': '#ffa657',
        'code-operator': '#ff7b72',
        'code-type': '#79c0ff',
        'code-constant': '#ffa657',
      },
      animation: {
        'typing': 'typing 3s steps(40, end)',
        'blink': 'blink 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        blink: {
          '0%, 50%': { borderColor: 'transparent' },
          '51%, 100%': { borderColor: '#ff7b72' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #ff7b72, 0 0 10px #ff7b72, 0 0 15px #ff7b72' },
          '100%': { boxShadow: '0 0 10px #ff7b72, 0 0 20px #ff7b72, 0 0 30px #ff7b72' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [],
};
