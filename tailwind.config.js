/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Aquí busca archivos donde se usen clases de Tailwind
    ],
    theme: {
      extend: {
        colors: {

          whitesmoke: "#f5f5f5",
        },
        backgroundColor: {
          mainBg: "#45283c"
        },
      },
    },
    plugins: [],
  };