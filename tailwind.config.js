/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Deep Navy
          light: "#334155",
        },
        secondary: {
          DEFAULT: "#3B82F6", // Vibrant Blue
          light: "#60A5FA",
        },
        accent: "#0EA5E9",
        surface: "#F8FAFC",
        "text-primary": "#0F172A",
        "text-secondary": "#64748B",
      },
      backgroundImage: {
        hero1: "url('/src/assets/hero1.jpg')",
        hero2: "url('/src/assets/hero2.jpg')",
        hero3: "url('/src/assets/hero3.jpg')",
        hero4: "url('/src/assets/hero4.jpg')",
        hero5: "url('/src/assets/hero5.jpg')",
        hero: "url('/src/assets/hero-bg.webp')",
      },
      keyframes: {
        "fade-scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-scale-in": "fade-scale-in 1s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
