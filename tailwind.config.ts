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
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-out",
        slideInRight: "slideInRight 0.3s ease-out",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
