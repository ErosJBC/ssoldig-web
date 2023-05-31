/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-ssd': "#584880",
        'purple-dark-ssd': "#4D3C73",
        'orange-ssd': "#ea6548",
        'skyblue-ssd': "#85b4ec",
        'blue-ssd': "#3c447c",
      }
    },
  },
  plugins: [],
}

