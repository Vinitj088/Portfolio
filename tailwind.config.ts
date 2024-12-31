import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        caveat: ['var(--font-caveat)']
      },
      animation: {
        'draw-v': 'draw-v 1.5s ease-out forwards',
        'fill-v': 'fill-v 1.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}
export default config