/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        surface: "#111827",
        card: "#151C2B",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
        ink: "#F9FAFB",
        muted: "#9CA3AF",
        line: "#273244",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
