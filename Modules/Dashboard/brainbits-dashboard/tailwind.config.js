/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        card: "#121723",
        cardLight: "#181E2E",
        accent: "#3B82F6",
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        borderDark: "#1F2937",
        green: "#22C55E",
        blue: "#60A5FA",
      },
    },
  },
  plugins: [],
};
