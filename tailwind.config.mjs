/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#0d0d0d',
        'brand-dark': '#111',
        'brand-grey': '#1c1c1c',
        'brand-light': '#272727',
        'brand-white': '#f0f0f0',
        'brand-blue': '#5C7CFA',
        'brand-beige': '#f5efde',
        'brand-pink': '#FF85B3',
        'foreground': '#f0f0f0',
        'background': '#111',
      },
    },
  },
  plugins: [],
};
