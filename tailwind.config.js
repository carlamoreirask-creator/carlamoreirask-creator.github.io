module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF8F5',
          100: '#FBF0E9',
          200: '#F5DCCF',
          300: '#ECC3AC',
          400: '#DE9974',
          500: '#B84C0E',
          600: '#9E3E07',
          700: '#873406',
          800: '#75320D',
          900: '#5E290E',
        },
        theme: {
          bgLight: '#FBFBFD',
          bgDark: '#000000',
          cardLight: '#FFFFFF',
          cardDark: '#1C1C1E',
          borderLight: '#E5E5EA',
          borderDark: '#2C2C2E',
          textLight: '#1D1D1F',
          textMuted: '#6E6E73',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'terracotta': '0 4px 14px rgba(184, 76, 14, 0.22)',
      }
    }
  },
  safelist: [
    'hidden',
    'opacity-0',
    'opacity-100',
    'pointer-events-none',
    'pointer-events-auto',
    'translate-y-4',
    'translate-y-0',
    'overflow-hidden',
    'shadow-md',
    'bg-white/95',
    'dark:bg-zinc-900/95',
    'bg-white/80',
    'dark:bg-zinc-900/80',
    'text-terracotta-600',
    'dark:text-terracotta-400',
    'font-semibold',
    'text-stone-600',
    'dark:text-zinc-300',
    'text-stone-700',
    'dark:text-zinc-200',
    'bg-terracotta-500',
    'text-white',
    'border-terracotta-500',
    'shadow-sm',
    'w-5',
    'h-5',
    'w-6',
    'h-6',
    'w-3.5',
    'h-3.5',
    'text-emerald-500',
    'text-amber-500',
    'text-amber-400',
    'text-terracotta-500'
  ],
  plugins: [],
};
