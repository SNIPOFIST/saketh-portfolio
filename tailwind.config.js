/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep originals for compat
        primary: "#0a0a14",
        secondary: "#12122a",
        tertiary: "#1e1e40",
        accent: "#f0f0f0",
        // Pokemon palette
        "poke-red": "#CC0000",
        "poke-darkred": "#8b0000",
        "poke-yellow": "#FFD700",
        "poke-gold": "#b8860b",
        "poke-blue": "#224b8d",
        "poke-lightblue": "#6890F0",
        "poke-dark": "#0a0a14",
        "poke-card": "#12122a",
        "poke-border": "rgba(255,215,0,0.4)",
        "poke-orange": "#f97316",
        "poke-fire": "#ea580c",
      },
      fontFamily: {
        pokemon: ['"Press Start 2P"', "monospace"],
        vt323: ['"VT323"', "monospace"],
        web3: ["Syncopate", "sans-serif"],
        body: ["Sen", "sans-serif"],
      },
      boxShadow: {
        "poke-gold": "0 0 0 1px rgba(255,215,0,0.6), 0 0 20px rgba(255,215,0,0.15), inset 0 0 40px rgba(255,215,0,0.05)",
        "poke-fire": "0 0 20px rgba(249,115,22,0.4), 0 0 40px rgba(234,88,12,0.3)",
        "poke-red": "0 0 16px rgba(204,0,0,0.5)",
        commandButton: "0 0 0 3px hsl(0 0% 30%)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            "h1,h2,h3,h4,h5,h6": { color: theme("colors.gray.100"), fontWeight: theme("fontWeight.bold") },
            "--tw-prose-code": theme("colors.red[300]"),
            "--tw-prose-bold": "#f0f0f0",
            "--tw-prose-quotes": "#f0f0f0",
          },
        },
      }),
      keyframes: {
        "poke-fire": {
          "0%,100%": {
            textShadow:
              "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #f97316, 0 0 82px #f97316, 0 0 92px #ea580c, 0 0 102px #dc2626, 0 0 151px #dc2626",
          },
          "50%": {
            textShadow:
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #fb923c, 0 0 80px #fb923c, 0 0 90px #f97316, 0 0 100px #ea580c, 0 0 150px #dc2626",
          },
        },
        "pokeball-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pokeball-bounce": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-gold": {
          "0%,100%": { boxShadow: "0 0 8px rgba(255,215,0,0.3), 0 0 0 1px rgba(255,215,0,0.4)" },
          "50%": { boxShadow: "0 0 24px rgba(255,215,0,0.6), 0 0 0 1px rgba(255,215,0,0.8)" },
        },
        "type-badge": {
          "0%,100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "lightning": {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "poke-fire": "poke-fire 1.8s ease-in-out infinite",
        "pokeball-spin": "pokeball-spin 2s linear infinite",
        "pokeball-bounce": "pokeball-bounce 1.4s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float 7s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "lightning": "lightning 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
