/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1280px',
      }
    },
    extend: {
      colors: {
        'steel-blue': {
          50: '#dff1ff',
          100: '#c0dae9',
          200: '#a1bfd2',
          300: '#6890a9',
          400: '#6890a9',
          500: '#4f7d97',
          600: '#426e86', // steele blue
          700: '#335a6f',
          800: '#26475a',
          900: '#143242',
        }
      }
    },
  },
  plugins: [],
}

