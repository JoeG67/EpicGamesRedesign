/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Include your Vue, JavaScript, and TypeScript files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit', // Just-in-Time mode enables all Tailwind utilities by default
}
