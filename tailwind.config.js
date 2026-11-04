/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { navy: '#111d68', blue: '#253d9b', gold: '#f6c84b', coral: '#e45742', ink: '#152044' },
    fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
    boxShadow: { soft: '0 22px 60px rgba(21,38,91,.12)' }
  }},
  plugins: []
}