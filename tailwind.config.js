/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Clean and modern sans-serif
      'sans': ['Inter', 'DM Sans', 'Poppins', 'Open Sans', 'sans-serif'],
      // Elegant and classic serif
      'serif': ['Playfair Display', 'Merriweather', 'Lora', 'Libre Baskerville', 'serif'],
      // Bold and decorative cursive
      'cursive': ['Lobster', 'Dancing Script', 'Pacifico', 'Great Vibes', 'cursive'],
      // Minimal and sophisticated
      'display': ['Raleway', 'Bebas Neue', 'Archivo', 'Kanit', 'sans-serif'],
      // Mono fonts for code
      'mono': ['Fira Code', 'Courier New', 'monospace'],
    },
    extend: {
      colors: {
        "darkGray": "#212121",
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [require('@tailwindcss/typography')],
}
