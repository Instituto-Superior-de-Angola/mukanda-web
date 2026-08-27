'use client';

import React from 'react';
import Link from 'next/link';
import StatsTicker from '@/components/StatsTicker';
import ProvinceMapCard from '@/components/ProvinceMapCard';
import DimensionsSection from '@/components/DimensionsSection';
import { useTranslation } from '@/lib/i18n/LanguageContext';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Database,
  FileText,
  Users,
} from 'lucide-react';

export default function HomePage() {
  const { dict } = useTranslation();

  const pilares = [
    {
      n: '01',
      titulo: dict.manifesto.col1Title,
      texto: dict.manifesto.col1Desc,
    },
    {
      n: '02',
      titulo: dict.manifesto.col2Title,
      texto: dict.manifesto.col2Desc,
    },
    {
      n: '03',
      titulo: dict.manifesto.col3Title,
      texto: dict.manifesto.col3Desc,
    },
    {
      n: '04',
      titulo: dict.manifesto.col4Title,
      texto: dict.manifesto.col4Desc,
    },
  ];

  const compromissos = [
    {
      icon: Database,
      titulo: 'Dados abertos e verificáveis',
      texto:
        'Microdados anonimizados, livros de códigos e sintaxe de análise publicados sob princípios FAIR, com identificador persistente por conjunto de dados.',
      href: '/transparencia',
      accao: 'Ver painel de progresso',
    },
    {
      icon: Users,
      titulo: 'Trabalho colaborativo',
      texto:
        'Painel Delphi com 30 peritos de Angola, União Europeia, CPLP e UNESCO; equipas provinciais e uma comunidade de prática aberta a instituições parceiras.',
      href: '/recrutamento',
      accao: 'Colaborar com a equipa',
    },
    {
      icon: FileText,
      titulo: 'Instrumentos auditáveis',
      texto:
        'Todos os questionários, protocolos de campo e critérios de pontuação são publicados antes da recolha, permitindo réplica e escrutínio independente.',
      href: '/questionarios',
      accao: 'Consultar instrumentos',
    },
  ];

  return (
    <>
      {/* ===================================================================
       * 1. Cabeçalho editorial
       * =================================================================== */}
      <section className="border-b border-line bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-7">
              <p className="kicker">
                <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
                {dict.hero.kicker}
              </p>

              <h1 className="mt-5 font-display font-semibold text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-ink">
                {dict.hero.titleStart}{' '}
                <span className="text-mukanda-terracotta">{dict.hero.titleHighlight}</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-prose">
                {dict.hero.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/diagnostico" className="btn-primary">
                  {dict.hero.ctaDiagnostic}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link href="/transparencia" className="btn-outline">
                  {dict.hero.ctaTransparency}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>

              <ul className="mt-10 pt-6 border-t border-line grid grid-cols-1 sm:grid-cols-3 gap-6 text-2xs">
                <li>
                  <span className="block uppercase tracking-kicker text-ink-muted">Referencial</span>
                  <span className="block mt-1 text-[0.8125rem] text-ink">{dict.hero.trustDigComp}</span>
                </li>
                <li>
                  <span className="block uppercase tracking-kicker text-ink-muted">Método</span>
                  <span className="block mt-1 text-[0.8125rem] text-ink">Delphi · Rasch/TRI · quase-experimental</span>
                </li>
                <li>
                  <span className="block uppercase tracking-kicker text-ink-muted">Dados</span>
                  <span className="block mt-1 text-[0.8125rem] text-ink">{dict.hero.trustFAIR}</span>
                </li>
              </ul>
            </div>

            {/* Ficha técnica do projecto */}
            <aside className="lg:col-span-5">
              <div className="card shadow-card">
                <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-subtle rounded-t-lg">
                  <h2 className="text-2xs font-semibold uppercase tracking-kicker text-ink-soft">
                    {dict.hero.cardTitle}
                  </h2>
                  <span className="font-mono text-2xs text-ink-muted">{dict.hero.cardBadge}</span>
                </div>

                <dl className="divide-y divide-line text-sm">
                  {[
                    ['Designação', `${dict.common.projectName} — AngoComp`],
                    ['Entidade proponente', dict.hero.proponentEntity],
                    ['Investigador principal', dict.hero.principalInvestigator],
                    ['Duração', '48 meses · Julho 2026 – Julho 2029'],
                    ['Amostra da linha de base', dict.hero.sampleSize],
                    ['Territórios piloto', `${dict.common.luanda} · ${dict.common.huila} · ${dict.common.uige}`],
                    ['Pacotes de trabalho', 'WP1 a WP6'],
                    ['Estado actual', 'WP1 em preparação'],
                  ].map(([termo, valor]) => (
                    <div key={termo} className="flex items-baseline justify-between gap-4 px-5 py-3">
                      <dt className="text-ink-muted text-[0.8125rem] shrink-0">{termo}</dt>
                      <dd className="text-ink text-[0.8125rem] font-medium text-right">{valor}</dd>
                    </div>
                  ))}
                </dl>

                <div className="px-5 py-4 border-t border-line bg-subtle rounded-b-lg">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
                  >
                    Consultar o desenho metodológico completo
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===================================================================
       * 2. Indicadores
       * =================================================================== */}
      <StatsTicker />

      {/* ===================================================================
       * 3. Compromissos: transparência, colaboração, rigor
       * =================================================================== */}
      <section className="py-16 lg:py-20 border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-prose">
            <p className="kicker">
              <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
              Princípios de conduta científica
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
              Investigação aberta ao escrutínio
            </h2>
            <p className="mt-4 prose-mukanda">
              O acompanhamento público do projecto não é um acessório de comunicação: é uma condição
              metodológica. Cada instrumento, decisão de amostragem e resultado intermédio é publicado
              no momento em que existe, para que a comunidade científica e as instituições parceiras
              possam verificar o percurso — e não apenas o desfecho.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-lg overflow-hidden">
            {compromissos.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titulo} className="bg-surface p-6 flex flex-col">
                  <Icon className="w-5 h-5 text-mukanda-indigo" aria-hidden />
                  <h3 className="mt-4 font-display font-semibold text-lg text-ink">{item.titulo}</h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-soft flex-1">{item.texto}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-kicker text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
                  >
                    {item.accao}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================================
       * 4. Etimologia e fundamentação
       * =================================================================== */}
      <section className="py-16 lg:py-20 border-b border-line bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            <div className="lg:col-span-6">
              <p className="kicker">
                <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
                {dict.manifesto.kicker}
              </p>
              <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
                {dict.manifesto.title}{' '}
                <span className="text-mukanda-terracotta">{dict.manifesto.titleHighlight}</span>?
              </h2>

              <div className="mt-6 space-y-5 prose-mukanda">
                <p>
                  {dict.manifesto.p1}
                </p>
                <p>
                  {dict.manifesto.p2}
                </p>
              </div>

              <blockquote className="mt-8 border-l-2 border-mukanda-gold pl-5 font-display text-lg italic leading-relaxed text-ink">
                {dict.manifesto.quote}
              </blockquote>

              <Link
                href="/sobre"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
              >
                <BookOpen className="w-4 h-4" aria-hidden />
                {dict.manifesto.teamLink}
              </Link>
            </div>

            <div className="lg:col-span-6">
              <ol className="divide-y divide-line border-t border-b border-line">
                {pilares.map((p) => (
                  <li key={p.n} className="py-6 grid grid-cols-[3rem_1fr] gap-4">
                    <span className="font-mono text-sm text-mukanda-terracotta pt-0.5">{p.n}</span>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">{p.titulo}</h3>
                      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-soft">{p.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
       * 5. As cinco dimensões do AngoComp
       * =================================================================== */}
      <DimensionsSection />

      {/* ===================================================================
       * 6. Pilotagem territorial
       * =================================================================== */}
      <section className="py-16 lg:py-20 border-b border-line bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProvinceMapCard />
        </div>
      </section>

      {/* ===================================================================
       * 7. Convite à colaboração
       * =================================================================== */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card bg-subtle p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <p className="kicker">
                  <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
                  {dict.ctaRecruitment.kicker}
                </p>
                <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
                  {dict.ctaRecruitment.title}
                </h2>
                <p className="mt-4 prose-mukanda max-w-prose">
                  {dict.ctaRecruitment.desc}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link href="/recrutamento" className="btn-accent">
                  {dict.ctaRecruitment.btnApply}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link href="/marca" className="btn-outline">
                  {dict.ctaRecruitment.btnBrand}
                  <ArrowUpRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
