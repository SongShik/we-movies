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
        // Personalização de cores
        'primary-purple': "#2A2A2A",        // Cinza quase preto
        'primary-purple-dark': "#1C1C1C",   // Cinza muito escuro
        'primary-blue': "#FFA500",          // Laranja
        'primary-blue-dark': "#FF8C00",     // Laranja escuro
        'primary-green': "#4CAF50",         // Verde médio vibrante
        'primary-green-dark': "#388E3C",    // Verde escuro vibrante
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
