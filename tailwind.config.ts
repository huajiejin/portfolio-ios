import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        zeroBounce: 'zeroBounce 1s infinite',
      },
      keyframes: {
        zeroBounce: {
          '0%, 100%': { transform: 'none' },
          '50%': { transform: 'translateY(-25%)', 'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' },
        },
      },
      colors: {
        primary: {
          100: '#E8DCFC',
          200: '#D1B9F9',
          300: '#BA96F6',
          400: '#A373F3',
          500: '#8C50F0',
          600: '#7441CA',
          700: '#5D32A4',
          800: '#45227E',
          900: '#2E1358',
        },
      },
    },
  },
  plugins: [],
};
export default config;
