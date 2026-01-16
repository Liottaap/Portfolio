/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Aquí busca archivos donde se usen clases de Tailwind
  ],
  theme: {
    extend: {
      colors: {
        whitebg: "#eee",
        blackbg: "#020617",
        darkLetter: "#4d505e",
        whiteLetter: "#d4c3e4",
      },
      backgroundColor: {
        mainBg: "#020617",
      },
      keyframes: {
      },

    },
  },
};