/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-ssd': "#564080",
        'purple-dark-ssd': "#4D3C73",
        'orange-ssd': "#ea6146",
        'skyblue-ssd': "#80b2ef",
        'blue-ssd': "#3c447c",
      }
    },
  },
  plugins: [],
}

