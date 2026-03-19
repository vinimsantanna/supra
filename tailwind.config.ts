import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#060606',
        foreground: '#f5f0e8',
        gold: '#d4af37',
        goldSoft: '#f4df9f',
        muted: '#a0a0a7'
      },
      boxShadow: {
        gold: '0 20px 60px rgba(212,175,55,0.12)',
        soft: '0 10px 30px rgba(0,0,0,0.35)'
      },
      animation: {
        marquee: 'marquee 42s linear infinite',
        float: 'float 8s ease-in-out infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-8px)' } }
      }
    }
  },
  plugins: []
};

export default config;
