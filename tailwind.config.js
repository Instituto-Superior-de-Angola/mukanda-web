/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mukanda: {
          terracotta: "#C2410C",
          "terracotta-light": "#FF6B35",
          "terracotta-dark": "#9A3412",
          indigo: "#0F2C59",
          "indigo-light": "#1E3A8A",
          "indigo-dark": "#071326",
          gold: "#F59E0B",
          "gold-light": "#FDE047",
          "gold-dark": "#D97706",
          emerald: "#059669",
          "emerald-light": "#10B981",
          sand: "#F8F6F0",
          slate: "#1E293B",
          charcoal: "#0F172A",
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "Outfit", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        'sona-mesh': "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.08) 0%, rgba(15, 44, 89, 0.02) 100%)",
        'hero-gradient': "linear-gradient(135deg, #071326 0%, #0F2C59 60%, #1E3A8A 100%)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
