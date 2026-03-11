import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Pods Neon Theme
        'void-black': '#0a0e27',
        'laser-pink': '#ff006e',
        'neon-lime': '#39ff14',
        'signal-blue': '#00d9ff',
        'amethyst': '#b537f2',
        'gold': '#ffd700',
        'dark-surface': '#151718',
        'dark-muted': '#687076',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #ff006e 0%, #b537f2 50%, #00d9ff 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-lime': '0 0 20px rgba(57, 255, 20, 0.5)',
        'neon-purple': '0 0 20px rgba(181, 55, 242, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-flicker': 'neon-flicker 3s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'neon-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
export default config
