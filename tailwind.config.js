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
        // ─── SM Associates Brand Blue #0072bc (remapped across all tokens) ───
        indigo: {
          950: '#001a2e',
          900: '#002644',
          800: '#003a66',
          700: '#005291',
          600: '#0072bc',  // ← PRIMARY brand color
          500: '#1a84c8',
          400: '#3d9ed6',
          300: '#70bae3',
          200: '#a8d4ef',
          100: '#d6ebf7',
          50:  '#eef6fb',
        },
        blue: {
          950: '#001a2e',
          900: '#002644',
          800: '#003a66',
          700: '#005291',
          600: '#0072bc',  // ← PRIMARY brand color
          500: '#0072bc',
          400: '#3d9ed6',
          300: '#70bae3',
          200: '#a8d4ef',
          100: '#d6ebf7',
          50:  '#eef6fb',
        },
        brand: {
          600: '#0072bc',
          500: '#0072bc',
          400: '#1a84c8',
          300: '#3d9ed6',
          200: '#a8d4ef',
          100: '#d6ebf7',
          50:  '#eef6fb'
        },
        gold: {
          500: '#0072bc',
          400: '#1a84c8',
          300: '#d6ebf7'
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

