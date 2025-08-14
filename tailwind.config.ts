import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      colors: {
        background: 'hsl(0 0% 7%)',
        foreground: 'hsl(0 0% 98%)',
        card: {
          DEFAULT: 'hsl(0 0% 10%)',
          foreground: 'hsl(0 0% 98%)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 10%)',
          foreground: 'hsl(0 0% 98%)',
        },
        primary: {
          DEFAULT: 'hsl(45 100% 50%)', // Golden yellow
          foreground: 'hsl(0 0% 7%)', // Black
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 15%)',
          foreground: 'hsl(0 0% 98%)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 15%)',
          foreground: 'hsl(0 0% 70%)',
        },
        accent: {
          DEFAULT: 'hsl(45 100% 40%)', // Darker gold
          foreground: 'hsl(0 0% 98%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(0 0% 20%)',
        input: 'hsl(0 0% 15%)',
        ring: 'hsl(45 100% 50%)',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        'neopop': '6px 6px 0 0 #000, 8px 8px 0 0 #ffbf00',
        'neopop-sm': '3px 3px 0 0 #000, 4px 4px 0 0 #ffbf00',
        'neopop-lg': '8px 8px 0 0 #000, 12px 12px 0 0 #ffbf00',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
