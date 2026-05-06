import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 落ち着いたセージグリーン系（信頼感 + やわらかさ）
        brand: {
          50: '#f4f8f4',
          100: '#e3eee5',
          200: '#c7ddcb',
          300: '#9cc1a4',
          400: '#6ea27a',
          500: '#4d8559',
          600: '#3d8a72', // primary（青緑寄りのセージ）
          700: '#2f6a58',
          800: '#28564a',
          900: '#22463d',
        },
        // 補色：マスタード／琥珀（アクセント、CTA、強調用）
        accent: {
          50: '#fdf8ec',
          100: '#fbecc4',
          400: '#d4a73c',
          500: '#b88a28',
          600: '#9a7320',
        },
        // クリーム／生成り背景
        cream: {
          50: '#fdfaf3',
          100: '#f8f1e3',
          200: '#efe4cb',
        },
        ink: {
          900: '#1c2a26',
          700: '#2f3d39',
          500: '#566563',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', '"Hiragino Kaku Gothic ProN"', '"Hiragino Sans"', 'Meiryo', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', '"Hiragino Mincho ProN"', '"Yu Mincho"', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      backgroundImage: {
        'paper-noise':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.45 0 0 0 0 0.3 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
