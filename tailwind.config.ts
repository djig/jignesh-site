import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0a0a0b",
        elevated: "#111113",
        panel: "#161618",
        ink: "#eceae4",
        mute: "#9a968e",
        dim: "#6b6862",
        line: "#222226",
        gold: {
          DEFAULT: "#e8b86d",
          dim: "#c49a52",
          faint: "#e8b86d1f",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-plex)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        page: "72rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(232,184,109,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,184,109,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "72px 72px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 1s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
