/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#2563EB',
          900: '#2563EB',
          800: '#3B82F6'
        },
        blue: {
          950: '#2563EB',
          900: '#2563EB',
          800: '#3B82F6',
          700: '#2563EB',
          600: '#2563EB',
          500: '#2563EB'
        },
        gold: {
          500: '#C8A45D',
          400: '#E6C87A'
        },
        slate: {
          50: '#FAFBFC',
          100: '#F8FAFC'
        }
      },
      boxShadow: {
        enterprise: '0 24px 80px rgba(37, 99, 235, 0.08)',
        enterpriseHover: '0 32px 90px rgba(37, 99, 235, 0.14)',
        soft: '0 12px 40px rgba(37, 99, 235, 0.06)'
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
