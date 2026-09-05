import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: { sans: ["Arial", "Helvetica", "sans-serif"] },
      borderColor: { DEFAULT: "hsl(130 5% 19% / <alpha-value>)" },
      colors: {
        border: "hsl(130 5% 19% / <alpha-value>)",
        input: "hsl(130 5% 24% / <alpha-value>)",
        ring: "hsl(77 83% 70% / <alpha-value>)",
        background: "hsl(150 7% 6% / <alpha-value>)",
        foreground: "hsl(60 9% 94% / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(77 83% 70% / <alpha-value>)",
          foreground: "hsl(150 7% 6% / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(150 5% 11% / <alpha-value>)",
          foreground: "hsl(60 9% 94% / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(0 70% 55% / <alpha-value>)",
          foreground: "hsl(0 0% 98% / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(150 4% 15% / <alpha-value>)",
          foreground: "hsl(100 4% 63% / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(77 83% 70% / <alpha-value>)",
          foreground: "hsl(150 7% 6% / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(150 5% 9% / <alpha-value>)",
          foreground: "hsl(60 9% 94% / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(150 5% 9% / <alpha-value>)",
          foreground: "hsl(60 9% 94% / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config