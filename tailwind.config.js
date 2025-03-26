/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aquí busca archivos donde se usen clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        whitebg: "#eee",
        blackbg: "#4d505e",
        whiteletter: "#d4c3e4",
      },
      backgroundColor: {
        mainBg: "#020617",
      },
      keyframes: {
      },

    },
  },
};