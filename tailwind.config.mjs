import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'base-white': '#fafafa', // 纸张感背景
        'base-black': '#121212', // 柔和黑
        'accent-blue': '#0070f3', // 唯一的极客交互色
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [typography],
}
