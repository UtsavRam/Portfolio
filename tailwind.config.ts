import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#101010",
          800: "#141414",
          700: "#1F1F1F",
          600: "#2A2A2A",
        },
        gold: {
          primary: "#D4A72C",
          hover: "#E0B83F",
          accent: "#F2C94C",
          muted: "#9E7B1A",
          dark: "#6B5210",
          light: "#FFE799",
        },
        card: {
          DEFAULT: "#0D0D0D",
          hover: "#121212",
          border: "rgba(255, 255, 255, 0.08)",
          "border-gold": "rgba(212, 167, 44, 0.25)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(212, 167, 44, 0.25)",
        "gold-glow-sm": "0 0 15px -3px rgba(212, 167, 44, 0.2)",
        "gold-glow-lg": "0 0 40px -5px rgba(212, 167, 44, 0.35)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
