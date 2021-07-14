module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetiary: "var(--tetiary)",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tetiary: "var(--tetiary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
