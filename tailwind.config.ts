import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0D0E",
        panel: "#16181B",
        raised: "#1E2124",
        line: "#2A2D31",
        paper: "#EDEDEA",
        muted: "#8A8F94",
        tally: "#E8402C",
        processing: "#F5A623",
        ready: "#3DDC84",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      keyframes: {
        pulseTally: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        scan: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 8px" },
        },
      },
      animation: {
        pulseTally: "pulseTally 1.1s ease-in-out infinite",
        scan: "scan 0.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
