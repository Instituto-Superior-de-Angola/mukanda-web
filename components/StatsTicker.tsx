'use client';

import React from 'react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function StatsTicker() {
  const { dict } = useTranslation();

  const stats = [
    { value: dict.stats.certifiedCitizens, label: dict.stats.certifiedDesc, note: 'Formação e avaliação AngoComp (WP4)' },
    { value: dict.stats.multipliers, label: dict.stats.multipliersDesc, note: 'Capacitação provincial (WP3)' },
    { value: dict.stats.baselineSample, label: dict.stats.baselineDesc, note: 'Inquérito representativo (WP1)' },
    { value: dict.stats.pilotProvinces, label: dict.stats.pilotProvincesDesc, note: 'Luanda, Huíla e Uíge' },
    { value: dict.stats.duration, label: dict.stats.durationDesc, note: 'Julho 2026 – Julho 2029' },
    { value: dict.stats.fairData, label: dict.stats.fairDesc, note: 'Repositório auditável' },
  ];

  return (
    <section aria-label="Indicadores-chave do projecto" className="border-y border-line bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y divide-line sm:divide-y-0 lg:divide-x lg:divide-line">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 lg:px-5 first:lg:pl-0 last:lg:pr-0">
              <dd className="font-display font-semibold text-3xl text-mukanda-indigo tabular">
                {stat.value}
              </dd>
              <dt className="mt-1 text-[0.8125rem] font-medium text-ink">{stat.label}</dt>
              <p className="mt-0.5 text-2xs text-ink-muted leading-snug">{stat.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
