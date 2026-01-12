/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        glass: "rgba(255,255,255,0.05)",
        glow: "#ff7a18",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 122, 24, 0.45)",
        glowSoft: "0 0 80px rgba(255, 122, 24, 0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        slowspin: "spin 12s linear infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 30px rgba(255,122,24,.4)" },
          "50%": { boxShadow: "0 0 70px rgba(255,122,24,.8)" },
        },
      },
    },
  },
  plugins: [],
};
