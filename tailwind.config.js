/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 8px rgba(0, 255, 255, 0.5)",
      },
      animation: {
        "fade-in-down": "fadeInDown 0.4s ease-out both",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
