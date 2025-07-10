/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-red-700',
    'bg-black',
    'text-blue-500',
    'bg-gray-100',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
