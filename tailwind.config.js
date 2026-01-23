/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#0f172a',
          'accent': '#10b981',
          'slate': '#64748b',
          'paper': '#f8fafc',
          'bg': '#f8fafc',
        }
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
