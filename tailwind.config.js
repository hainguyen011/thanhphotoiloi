module.exports = {
  darkMode: 'class', // ✅ sử dụng class="dark"
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb',
          dark: 'red',
        },
      },
    },
  },
}