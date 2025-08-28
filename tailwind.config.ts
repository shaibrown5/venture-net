import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- Brand / Action ---
        primary: "#1B365D", // Deep Blue (trust, headers, navbar)
        accent: "#5B4B8A", // Purple (creativity, highlights)
        cta: "#FF6B35", // Orange (call-to-action, buttons)
        success: "#2BB673", // Teal (positive actions, success)
        error: "#E63946", // Red (errors, rejections)

        // --- Backgrounds ---
        background: {
          light: "#F5F5F7", // Light mode background
          dark: "#2E2E2E", // Dark mode background
          card: "#FFFFFF", // Card / panel (light mode)
          cardDark: "#1E1E1E", // Card / panel (dark mode)
        },

        // --- Text System ---
        text: {
          main: "#2E2E2E", // Primary text
          sub: "#5A5A5A", // Secondary text
          helper: "#9A9A9A", // Muted / helper text
          inverted: "#FFFFFF", // Text on dark surfaces
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
};
export default config;
