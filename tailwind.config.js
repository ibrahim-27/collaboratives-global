/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero1: "url('/src/assets/hero1.jpg')",
        hero2: "url('/src/assets/hero2.jpg')",
        hero3: "url('/src/assets/hero3.jpg')",
        hero4: "url('/src/assets/hero4.jpg')",
        hero5: "url('/src/assets/hero5.jpg')",
        hero: "url('/src/assets/hero-bg.webp')",
        services: "url('/src/assets/services-bg.webp')",
        about: "url('/src/assets/aboutus-bg.png')",
        contact: "url('/src/assets/contactus-bg.jpg')",
        careers: "url('/src/assets/careers-bg.jpeg')",
      },
      colors: {
        primary: "#21335B",
        "primary-light": "#4A5A7A",
        secondary: "#1B9CE3",
        "secondary-light": "#6EC1E4",
        "text-secondary": "#615F5F",
      },
      keyframes: {
        "fade-scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-scale-in": "fade-scale-in 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
