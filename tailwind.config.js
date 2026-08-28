/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---------------------------------------------------------------
         * Paleta institucional Mukanda — registo académico, tons claros.
         * Cores dessaturadas para leitura prolongada e impressão fiel.
         * ------------------------------------------------------------- */
        mukanda: {
          /* Acento primário: terracota de arquivo (usar com parcimónia) */
          terracotta: "#A9543A",
          "terracotta-light": "#C0704F",
          "terracotta-dark": "#8A4029",

          /* Institucional: azul-tinta da ACITE */
          indigo: "#1C3557",
          "indigo-light": "#2B4A72",
          "indigo-dark": "#132741",

          /* Ocre documental (substitui o dourado saturado) */
          gold: "#A07B2C",
          "gold-light": "#C4A059",
          "gold-dark": "#7E5F1E",

          /* Verificação / estado positivo */
          emerald: "#2F6F55",
          "emerald-light": "#3F8A6B",

          /* Superfícies */
          sand: "#F6F4EF",
          slate: "#3F4A57",
          charcoal: "#111A24",
        },

        /* Tokens semânticos de superfície e texto */
        paper: "#FBFAF7",
        surface: "#FFFFFF",
        subtle: "#F4F2ED",
        line: "#E3E0D8",
        "line-strong": "#CFCABE",
        ink: "#16212E",
        "ink-soft": "#44505E",
        "ink-muted": "#6C7784",
      },
      fontFamily: {
        display: ["Source Serif 4", "Georgia", "Times New Roman", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        kicker: "0.14em",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        sm: "0.1875rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.625rem",
        "2xl": "0.75rem",
        "3xl": "1rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22, 33, 46, 0.04)",
        raised: "0 1px 3px rgba(22, 33, 46, 0.06), 0 8px 24px -12px rgba(22, 33, 46, 0.10)",
        none: "none",
      },
      backgroundImage: {
        "rule-grid":
          "linear-gradient(to right, rgba(28, 53, 87, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(28, 53, 87, 0.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}

module.exports = config;
