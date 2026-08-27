'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ProvinceMapCard() {
  const [activeProvince, setActiveProvince] = useState<'luanda' | 'huila' | 'uige'>('luanda');
  const { dict } = useTranslation();

  const provinces = {
    luanda: {
      name: dict.common.luanda,
      fullName: `Província de ${dict.common.luanda}`,
      type: "Tipo Metropolitano & Alta Densidade",
      certifiedTarget: "1.000 Cidadãos",
      trainersTarget: "50 Formadores",
      sampleWP1: "700 Inquiridos",
      focusAreas: [
        "Transição digital nos serviços públicos e comércio formal/informal",
        "Competências de cibersegurança e combate a fraudes bancárias eletrónicas",
        "Empregabilidade jovem e literacia para o ecossistema tecnológico",
        "Validação de instrumentos psicométricos com alta densidade demográfica"
      ],
      description: "Como capital e centro financeiro do país, Luanda apresenta elevada penetração de infraestrutura de conectividade móvel, mas assimetrias marcantes no uso produtivo e seguro dos recursos digitais."
    },
    huila: {
      name: dict.common.huila,
      fullName: `Província da ${dict.common.huila}`,
      type: "Tipo Urbano Interior & Pólo Universitário",
      certifiedTarget: "800 Cidadãos",
      trainersTarget: "35 Formadores",
      sampleWP1: "450 Inquiridos",
      focusAreas: [
        "Integração do quadro AngoComp na formação docente e centros universitários",
        "Inclusão digital em cidades médias (Lubango e municípios periféricos)",
        "Capacitação para serviços de saúde, educação e agronegócio regional",
        "Estudo comparativo de retenção de competências no interior sul"
      ],
      description: "Representa o tecido sociocultural do sul de Angola, combinando uma sólida tradição académica no Lubango com comunidades periurbanas que beneficiam da formação multiplicadora."
    },
    uige: {
      name: dict.common.uige,
      fullName: `Província do ${dict.common.uige}`,
      type: "Tipo Predominantemente Rural & Agrário",
      certifiedTarget: "700 Cidadãos",
      trainersTarget: "35 Formadores",
      sampleWP1: "350 Inquiridos",
      focusAreas: [
        "Literacia digital de base e inclusão de cooperativas agrícolas",
        "Acesso à informação meteorológica, mercados e preços via smartphone",
        "Adaptação linguística e pedagógica dos conteúdos AngoComp",
        "Capacitação de líderes comunitários e agentes locais de desenvolvimento"
      ],
      description: "Constitui o cenário piloto fundamental para testar a resiliência e adaptação do quadro AngoComp em zonas de menor conectividade física e contextos rurais no norte de Angola."
    }
  };

  const curr = provinces[activeProvince];
  const separador = (Object.keys(provinces) as Array<keyof typeof provinces>);

  return (
    <div>
      {/* Cabeçalho */}
      <div className="max-w-prose">
        <p className="kicker">
          <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
          {dict.provincesSection.kicker}
        </p>
        <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
          {dict.provincesSection.title}
        </h2>
        <p className="mt-4 prose-mukanda">
          {dict.provincesSection.subtitle}
        </p>
      </div>

      {/* Selector de província */}
      <div
        className="mt-8 flex flex-wrap gap-2 border-b border-line pb-px"
        role="tablist"
        aria-label="Províncias piloto"
      >
        {separador.map((key) => {
          const isActive = activeProvince === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveProvince(key)}
              className={`px-4 py-2.5 text-sm font-medium -mb-px border-b-2 transition-colors ${
                isActive
                  ? 'border-mukanda-terracotta text-ink'
                  : 'border-transparent text-ink-muted hover:text-ink-soft'
              }`}
            >
              {provinces[key].name}
            </button>
          );
        })}
      </div>

      {/* Ficha da província */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

        <div className="lg:col-span-5">
          <p className="font-mono text-2xs uppercase tracking-kicker text-ink-muted">{curr.type}</p>
          <h3 className="mt-2 font-display font-semibold text-2xl text-ink">{curr.fullName}</h3>
          <p className="mt-3 prose-mukanda">{curr.description}</p>

          <dl className="mt-6 border-t border-line divide-y divide-line">
            {[
              [dict.provincesSection.targetCertified, curr.certifiedTarget, 'WP4'],
              [dict.provincesSection.targetTrainers, curr.trainersTarget, 'WP3'],
              [dict.provincesSection.targetSample, curr.sampleWP1, 'WP1'],
            ].map(([rotulo, valor, wp]) => (
              <div key={rotulo} className="py-3.5 flex items-baseline justify-between gap-4">
                <dt className="text-[0.8125rem] text-ink-soft">
                  {rotulo}
                  <span className="ml-2 font-mono text-2xs text-ink-muted">{wp}</span>
                </dt>
                <dd className="font-display font-semibold text-lg text-mukanda-indigo tabular">{valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <h4 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
            {dict.provincesSection.prioritiesTitle}
          </h4>
          <ol className="mt-4 divide-y divide-line border-b border-line">
            {curr.focusAreas.map((area, idx) => (
              <li key={area} className="py-4 grid grid-cols-[2rem_1fr] gap-3">
                <span className="font-mono text-2xs text-ink-muted pt-1">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-[0.8125rem] leading-relaxed text-ink-soft">{area}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-5 border border-line rounded-lg bg-subtle">
            <div>
              <p className="font-display font-semibold text-ink">
                {dict.provincesSection.residentCall} ({curr.name})
              </p>
              <p className="mt-1 text-[0.8125rem] text-ink-soft">
                {dict.provincesSection.residentDesc}
              </p>
            </div>
            <Link href="/recrutamento" className="btn-primary text-[0.8125rem] py-2 shrink-0">
              {dict.provincesSection.ctaApplyProvince}
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
