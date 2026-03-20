import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#f6efe3',
        foreground: '#251b10',
        gold: '#d4af37',
        goldSoft: '#f4df9f',
        muted: '#736856'
      },
      boxShadow: {
        gold: '0 24px 70px rgba(212,175,55,0.16)',
        soft: '0 18px 40px rgba(102,78,31,0.12)'
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
