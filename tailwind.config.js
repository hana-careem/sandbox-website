/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        coolvetica: ['Coolvetica', 'sans-serif'],
        quicksilver: ['Quicksilver', 'sans-serif'],
        boldfont: ['TheBoldFont', 'sans-serif'],
        lemonmilk: ['LemonMilk', 'sans-serif'],
        rockville: ['RockvilleSolid', 'sans-serif'],
        santo: ['Santo', 'sans-serif'],
        adolphus: ['Adolphus', 'sans-serif'],
        arthead: ['Arthead', 'sans-serif'],
        aubrey: ['Aubrey', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
