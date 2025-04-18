// Tailwind config for Never Shitty™ brand
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: "#111111",
        accent: "#9fef00",
        vibe: "#ff00f7"
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Neue Montreal'", "sans-serif"],
        mono: ["'Recursive Mono'", "monospace"]
      }
    }
  },
  plugins: []
}
