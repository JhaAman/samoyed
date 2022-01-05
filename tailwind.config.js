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
          DEFAULT: "#F7438F",
          50: "#FEF3F8",
          100: "#FEE0EC",
          200: "#FCB8D5",
          300: "#FA91BE",
          400: "#F96AA6",
          500: "#F7438F",
          600: "#F50D6F",
          700: "#C20856",
          800: "#8C063E",
          900: "#560426",
        },
        accent: {
          500: "#F74545",
        },
        secondary: {
          500: "#4397F7",
        },
        dark: {
          "overlay-light": "#555555",
          "overlay-dark": "#383838",
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
