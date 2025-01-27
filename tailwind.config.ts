import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      danger: 'var(--color-danger)',
      background: 'var(--color-background)',
      surface: 'var(--color-surface)',
      muted: 'var(--color-muted)',
      textPrimary: 'var(--color-text-primary)',
      textSecondary: 'var(--color-text-secondary)',
      gridLines: 'var(--color-grid-lines)',
      bgText: 'var(--color-bg-text)',
      border: 'var(--color-border)',
      white: 'var(--color-white)',
      green: 'var(--color-green)',
      shadow: 'var(--color-shadow)',
      overlay: 'var(--color-overlay)',
      sd1: 'var(--color-sd1)',
      sd2: 'var(--color-sd2)',
      sd3: 'var(--color-sd3)',
      meanLine: 'var(--color-mean-line)',
      navbar: 'var(--color-navbar)',
      borderColor: 'var(--border-color);',
      sun: 'var(--color-sun)',
      moon: 'var(--color-moon)',
      buttonMuted: 'var(--color-button-muted)',

      dark: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        bgText: 'var(--color-bg-text)',
        muted: 'var(--color-muted)',
        gridLines: 'var(--color-grid-lines)',
        border: 'var(--color-border)',
        white: 'var(--color-white)',
        green: 'var(--color-green)',
        shadow: 'var(--color-shadow)',
        overlay: 'var(--color-overlay)',
        sd1: 'var(--color-sd1)',
        sd2: 'var(--color-sd2)',
        sd3: 'var(--color-sd3)',
        meanLine: 'var(--color-mean-line)',
        navbar: 'var(--color-navbar)',
        borderColor: 'var(--border-color);',
        sun: 'var(--color-sun)',
        moon: 'var(--color-moon)',
        buttonMuted: 'var(--color-button-muted)',
      },
    },
  },
  plugins: [],
};

export default config;
