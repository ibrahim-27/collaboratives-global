/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero-bg.png')",
      },
      colors: {
        'primary': '#21335B',
        'primary-light': '#4A5A7A',
        'secondary': '#1B9CE3',
        'secondary-light': '#6EC1E4',
        'text-secondary': '#615F5F'
      }
    },
  },
  plugins: [],
}

