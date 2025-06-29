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
        // Helixar Core Color Palette - Exact specifications
        'deep-charcoal': '#0D0D0D',
        'obsidian-black': '#1A1A1A',
        'pure-white': '#FFFFFF',
        'warm-gold': '#FFC700',
        'medium-grey': '#A0A0A0',
        'alert-red': '#FF4444',
        
        // Semantic color mappings
        primary: {
          background: '#0D0D0D',
          text: '#FFFFFF',
          accent: '#FFC700',
        },
        secondary: {
          text: '#A0A0A0',
        },
        error: {
          DEFAULT: '#FF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'button-shine': 'buttonShine 0.6s ease-out',
        'input-focus': 'inputFocus 0.3s ease-out',
        'progress-shimmer': 'progressShimmer 2s linear infinite',
        'breathing-glow': 'breathingGlow 4s ease-in-out infinite',
        'noise-texture': 'noiseTexture 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFC700' },
          '100%': { boxShadow: '0 0 20px #FFC700, 0 0 30px #FFC700' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        buttonShine: {
          '0%': { 
            backgroundPosition: '-200% 0',
            opacity: '0'
          },
          '50%': { 
            opacity: '0.3'
          },
          '100%': { 
            backgroundPosition: '200% 0',
            opacity: '0'
          },
        },
        inputFocus: {
          '0%': { 
            transform: 'scaleX(0)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scaleX(1)',
            opacity: '1'
          },
        },
        progressShimmer: {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          },
        },
        breathingGlow: {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(255, 199, 0, 0)',
            boxShadow: '0 0 5px rgba(255, 199, 0, 0)'
          },
          '50%': { 
            textShadow: '0 0 15px rgba(255, 199, 0, 0.3)',
            boxShadow: '0 0 15px rgba(255, 199, 0, 0.3)'
          },
        },
        noiseTexture: {
          '0%': { 
            transform: 'translate(0, 0)'
          },
          '100%': { 
            transform: 'translate(100px, 100px)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'button-shine': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        'progress-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 199, 0, 0.3), transparent)',
        'noise-texture': 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} 