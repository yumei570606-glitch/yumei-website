import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#212A51',
        navy: '#3461A7',
        'blue-soft': '#8CB2C2',
        'blue-bg': '#E6EEF2',
        cream: '#F8F5F3',
        'cream-2': '#FFFFFF',
        beige: '#EBD6B3',
        'beige-soft': '#F4E6CE',
        gold: '#EBBF61',
        'gold-soft': '#FAEFD3',
        ink: '#2B2F3A',
        'ink-2': '#5B6275',
        muted: '#8A90A0',
        line: '#E8E2DB',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-tc)', 'PingFang TC', 'Microsoft JhengHei', 'sans-serif'],
        display: ['var(--font-montserrat)', 'var(--font-noto-sans-tc)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
