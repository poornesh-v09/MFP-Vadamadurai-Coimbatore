/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Gold
        secondary: "#C0C0C0", // Silver
        dark: "#111111", // Deep Black/Charcoal
        "dark-lighter": "#1a1a1a", // Slightly lighter for cards
        "accent-red": "#ff0033", // Kept for alerts if needed, renamed from neon-red
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')", // Placeholder
      }
    },
  },
  plugins: [],
}
