/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero-bg.webp')",
        'services': "url('/src/assets/services-bg.webp')",
        'about': "url('/src/assets/aboutus-bg.webp')",
        'contact': "url('/src/assets/contactus-bg.jpg')",
        'careers': "url('/src/assets/careers-bg.jpeg')",
      },
      colors: {
        'primary': '#21335B',
        'primary-light': '#4A5A7A',
        'secondary': '#1B9CE3',
        'secondary-light': '#6EC1E4',
        'text-secondary': '#615F5F'
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

