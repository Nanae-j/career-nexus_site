import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mundial: ['mundial, sans-serif'],
        kintoSans: ['kinto-sans, sans-serif'],
      },
      fontWeight: {
        'mundial-thin': '100',
        'mundial-light': '300',
        'mundial-regular': '400',
        'mundial-demibold': '600',
        'kintSans-regular': '400',
        'kintSans-medium': '500',
      },
      colors: {
        main: {
          green: '#93CA88',
          black: '#313131',
        },
      },
    },
  },
  plugins: [],
};
export default config;
