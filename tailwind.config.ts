import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        "primary-hover": "#2563eb",
        "secondary-accent": "#60a5fa",
        "background-light": "#f7f7f7",
        "background-dark": "#191919",
        "surface-dark": "#1e293b",
        "surface-border": "#334155",
        "text-muted": "#94a3b8",
        "text-light": "#cbd5e1",
      },
      fontFamily: {
        display: "Inter",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      textColor: {
        muted: "#94a3b8",
        light: "#cbd5e1",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
