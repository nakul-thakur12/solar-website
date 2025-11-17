/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5b86e5',      // Primary Blue
        secondary: '#36d1dc',    // Cyan
        darkBlue: '#5b769e',     // Dark Blue
        textGray: '#8f979a',     // Gray Text
        lightBg: '#f5f5f5',      // Light Background
        footer: '#476186',       // Footer Dark
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0px 0px 20px 0px rgba(131, 149, 255, 0.14)',
      },
      backgroundImage: {
        'gradient-blue-cyan': 'linear-gradient(-55deg, #36d1dc, #5b86e5)',
        'gradient-banner': 'linear-gradient(135deg, #5b86e5 0%, #36d1dc 100%)',
      },
    },
  },
  plugins: [],
}
