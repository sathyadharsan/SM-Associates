/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0e0818',
          900: '#130b2e',
          800: '#2d1654'
        },
        blue: {
          950: '#0e0818',
          900: '#130b2e',
          800: '#2d1654',
          700: '#3d1f7a',
          600: '#5a2eb5',
          500: '#3366FF',
          100: '#ede5ff',
          50:  '#f5f0ff'
        },
        brand: {
          600: '#6622dd',
          500: '#3366FF',
          400: '#a366ff',
          100: '#ede5ff',
          50:  '#f5f0ff'
        },
        gold: {
          500: '#C8A45D',
          400: '#E6C87A',
          300: '#f0d89a'
        },
        slate: {
          50: '#FAFBFC',
          100: '#F8FAFC'
        }
      },
      boxShadow: {
        enterprise: '0 24px 80px rgba(10, 22, 40, 0.12)',
        enterpriseHover: '0 32px 90px rgba(10, 22, 40, 0.20)',
        soft: '0 12px 40px rgba(10, 22, 40, 0.08)'
      },
      borderRadius: {
        enterprise: '20px'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
