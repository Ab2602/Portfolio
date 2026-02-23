/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'scroll-reverse': 'scroll-reverse 20s linear infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "retro", // Light mode - retro theme (beige/warm colors)
      "dark",  // Dark mode - dark theme (blue/dark colors)
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
  },
}
