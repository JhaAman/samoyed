const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,

        "overlay-light": "var(--overlay-light)",
        "overlay-dark": "var(--overlay-dark)",
        surface: "var(--surface)",
        base: "var(--base)",
        overflow: "var(--overflow)",

        "primary-dark": "var(--primary-dark)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "on-primary": "var(--on-primary)",
        "primary-bg-tint": "var(--primary-bg-tint)",

        "accent-dark": "var(--accent-dark)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "on-accent": "var(--on-accent)",
        "accent-bg-tint": "var(--accent-bg-tint)",

        "hero-left": "var(--hero-left)",
        "hero-right": "var(--hero-right)",

        rosie: {
          // 50: "#ecaaba",
          // 100: "#e898ac",
          // 200: "#e4879e",
          // 300: "#e07690",
          // 400: "#dc6582",
          500: "#F7438F",
          // 600: "#c24c68",
          // 700: "#ad435d",
          // 800: "#973b51",
          // 900: "#823246",
        },
        accent: {
          500: "#F74545",
        },
        secondary: {
          500: "#4397F7",
        },
        dark: {
          "overlay-light": "#555555",
          "overlay-dark": "#2B2B2B",
          surface: "#252525",
          base: "#1A1A1A",
          overflow: "#111111",
          "hero-left": "#261722",
          "hero-right": "#121c23",
        },
      },
      keyframes: {
        moveUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(20px)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-30)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animation-delay")],
};
