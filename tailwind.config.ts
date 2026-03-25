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
        navy: {
          DEFAULT: "#0D1F5C",
          deep: "#000A38",
          light: "#1A3FBF",
        },
        indigo: {
          tint: "#EEF2FF",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
        },
        offwhite: "#F8F7F4",
        headline: "#0A0D1A",
        body: "#4A4F6A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        hero: "0 24px 80px rgba(13,31,92,0.18)",
        card: "0 4px 24px rgba(13,31,92,0.08)",
        "card-hover": "0 12px 40px rgba(13,31,92,0.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "count-up": "countUp 2s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
