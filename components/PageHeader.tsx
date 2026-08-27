import React from 'react';

interface PageHeaderProps {
  /** Etiqueta de secção em versaletes (contexto institucional da página) */
  kicker: string;
  title: string;
  lead?: string;
  /** Pares rótulo/valor apresentados como ficha de referência */
  meta?: Array<{ label: string; value: string }>;
  children?: React.ReactNode;
}

/**
 * Cabeçalho editorial comum a todas as páginas interiores.
 * Registo claro, alinhado à esquerda, com filete inferior — sem faixas
 * cromáticas, para manter a leitura próxima de um documento científico.
 */
export default function PageHeader({ kicker, title, lead, meta, children }: PageHeaderProps) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <p className="kicker">
          <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
          {kicker}
        </p>

        <h1 className="mt-4 font-display font-semibold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight text-ink max-w-4xl">
          {title}
        </h1>

        {lead && <p className="mt-5 text-lg leading-relaxed text-ink-soft max-w-prose">{lead}</p>}

        {meta && meta.length > 0 && (
          <dl className="mt-8 pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-2xs uppercase tracking-kicker text-ink-muted">{item.label}</dt>
                <dd className="mt-1 text-[0.8125rem] text-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {children}
      </div>
    </header>
  );
}
