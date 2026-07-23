/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b'
        },
        blue: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#0072bc',
          100: '#f0f6fa',
          50:  '#f8fafc'
        },
        brand: {
          600: '#0072bc',
          500: '#0072bc',
          400: '#0072bc',
          100: '#f0f6fa',
          50:  '#f8fafc'
        },
        gold: {
          500: '#0072bc',
          400: '#0072bc',
          300: '#f0f6fa'
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
