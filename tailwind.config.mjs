/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#111',
        'brand-dark': '#222',
        'brand-grey': '#C9CCD5',
        'brand-light': '#F4F4F4',
        'brand-white': '#fff',
        'foreground': '#111',
        'background': '#F4F4F4',
      },
    },
  },
  plugins: [],
};
