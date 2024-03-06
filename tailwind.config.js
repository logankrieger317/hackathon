module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'skyline': "url('./images/skyline.jpeg')",
      })
    }
  },
  plugins: [],
}