import React from 'react';

/**
 * Marca gráfica do Projecto Mukanda.
 * Geometria derivada dos ideogramas Tusona: um traçado contínuo em torno de
 * um núcleo central, executado em tinta institucional sobre fundo claro.
 */
export default function MukandaMark({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Marca do Projecto Mukanda"
    >
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="4" fill="#FFFFFF" stroke="#E3E0D8" strokeWidth="1.5" />
      <g stroke="#1C3557" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M32 12 C 18 12, 12 22, 12 32 C 12 44, 22 50, 32 54" />
        <path d="M32 12 C 46 12, 52 22, 52 32 C 52 44, 42 50, 32 54" />
        <path d="M20 32 H 44" />
      </g>
      <circle cx="32" cy="32" r="6" fill="#A9543A" />
      <circle cx="32" cy="12" r="2.5" fill="#1C3557" />
      <circle cx="32" cy="54" r="2.5" fill="#A07B2C" />
    </svg>
  );
}
