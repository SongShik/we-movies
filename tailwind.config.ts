import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-purple': "#2F2E41",
        'primary-purple-dark': "#1e1d2d",
        'primary-blue': "#009EDD",
        'primary-blue-dark': "#0073A1",
        'primary-green': "#039B00",
        'primary-green-dark': "#027a00",
        'primary-gray': "#999999",
        'primary-gray-dark': "#666666",
        'custom-black': "#333333",
        'custom-black-dark': "#1e1d2d",
      },
      fontSize: {
        'h1': '2.25rem',
        'h2': '1.875rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'h5': '1rem',
        'h6': '0.875rem',
        'small': '0.75rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
