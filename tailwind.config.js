export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        netflixIntro: {
          '0%': { transform: 'scale(0.4)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        netflixIntro: 'netflixIntro 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}