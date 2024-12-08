/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // System default sans-serif fonts
      'sans': ['ui-sans-serif', 'system-ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      // Serif fonts including Times New Roman
      'serif': ['Times New Roman', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
      // Monospace fonts for coding/console style
      'mono': ['ui-monospace', 'SFMono-Regular', 'Courier New', 'monospace'],
      // Display fonts for headlines or emphasis
      'display': ['Oswald', 'Merriweather', 'Poppins', 'sans-serif'],
      // Body fonts for general text
      'body': ['"Open Sans"', 'Lora', 'Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        "darkGray": "#212121",
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [],
}
