// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 기본 sans-serif 글꼴 스택에 'Pretendard'를 가장 앞에 추가합니다.
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}