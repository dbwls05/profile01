// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내의 모든 관련 파일 포함
  ],
  theme: {
    extend: {
      colors: {
        'branding-color': '#FF6B6B', // 예시 브랜딩 컬러 (선명한 빨강 계열)
        'default-gray': '#A0AEC0',   // 기본 회색 (Tailwind의 gray-500과 유사)
      },
      fontFamily: {
        sans: ['"Pretendard"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [],
}