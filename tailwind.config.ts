import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Questrial ,sans-serif",
        text: "Trykker, serif",
      },
      colors: {
        "primary-default": "#001514",
        "primary-hover": "#243635",
        "primary-pressed": "#475756",
        "primary-focused": "#E0E3E3",
        "primary-disabled": "#A8AFAF",
        "background-primary": "#FCFBF9",
        "background-secondary": "#EDEFEF",
        "surface-high": "#A8AFAF",
        "surface-medium": "#C2C7C7",
        "surface-low": "#E0E3E3",
        "border-primary": "#A8AFAF",
        "border-secondary": "#5E6C6B",
        "font-high": "#001514",
        "font-medium": "#243635",
        "font-low": "#475756",
        "base-black": "#000000",
        "base-white": "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
