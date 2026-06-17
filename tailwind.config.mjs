/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#8624E5',
        'brand-light': '#8B5CF6',
        'bg-main': '#070809',
        'bg-dark': '#0A0B0C',
        'text-main': '#F5F5F5',
      },
      fontFamily: {
        heading: ['Anton', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        heading: '0.08em',
      },
      keyframes: {
        'partners-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'partners-marquee': 'partners-marquee 30s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
