/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        trending: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(-10px)', opacity: '0.8' },
        },
        animation: {
        trending: 'trending 2s ease-in-out infinite',
      },
    },
    },
    fontFamily: {
      'hero-font':['Sriracha'],
      'body-font':['Golos Text']
    }
  },
  plugins: [],
}

