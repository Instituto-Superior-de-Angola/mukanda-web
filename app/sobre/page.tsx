'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import { Users, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function SobrePage() {
  const { dict } = useTranslation();

  const leadership = [
    {
      name: "Eng. Benone Marcos, PhD",
      role: "Investigador Principal & Coordenador Geral",
      institution: dict.common.institutionFull,
      focus: "Arquitetura de Sistemas, Metodologia Psicométrica & Governação do Projecto",
      badge: "Investigador Principal"
    },
    {
      name: "Conselho Científico da ACITE",
      role: "Órgão Científico Proponente & Supervisão",
      institution: "Academia de Ciências Sociais e Tecnologias (ACITE)",
      focus: "Homologação Epistemológica, Certificação Docente & Ética",
      badge: "Supervisão Científica"
    },
    {
      name: "Comité Científico Internacional (CCI)",
      role: "Peritos Independentes & Painel Delphi",
      institution: "Peritos externos independentes, a constituir",
      focus: "Validação Cruzada do AngoComp com o DigComp 2.2 e Padrões Globais",
      badge: "Validação Internacional"
    }
  ];

  const workPackages = [
    { code: "WP1", title: "Diagnóstico Empírico de Linha de Base", focus: `Inquérito N=1.500 em ${dict.common.luanda}, ${dict.common.huila} e ${dict.common.uige}; calibração estatística inicial.` },
    { code: "WP2", title: "Concepção do Quadro AngoComp", focus: "Método Delphi com 30 peritos, definição de 21 competências e 8 níveis de proficiência." },
    { code: "WP3", title: "Formação de 120 Multiplicadores", focus: "Capacitação intensiva de formadores provinciais e criação de kits didácticos." },
    { code: "WP4", title: "Pilotagem & Certificação de 2.500 Cidadãos", focus: "Ensaio quase-experimental N=600 e certificação em massa nas três tipologias territoriais." },
    { code: "WP5", title: "Construção do Índice ILDA", focus: "Modelação psicométrica final e transferência institucional para o MESCTI e INE." },
    { code: "WP6", title: "Gestão, FAIR Data & Auditoria", focus: "Coordenação executiva, repositório de dados abertos e publicação de 6 artigos indexados." }
  ];

  return (
    <>
      <PageHeader
        kicker="Génese, metodologia e governação"
        title={`Sobre o ${dict.common.projectName}`}
        lead="Concepção, validação e pilotagem de um instrumento científico de referência para o diagnóstico, a certificação e a promoção da literacia digital em Angola."
        meta={[
          { label: 'Proponente', value: 'ACITE — Academia de Ciências Sociais e Tecnologias' },
          { label: 'Investigador principal', value: 'Eng. Benone Marcos, PhD' },
          { label: 'Execução', value: 'Julho 2026 – Julho 2029' },
          { label: 'Estrutura', value: 'Seis pacotes de trabalho (WP1–WP6)' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16">
        {/* 1. Evolução Histórica (2023 vs 2026) */}
        <div className="card p-6 sm:p-10 space-y-6">
          <div className="kicker">
            <Sparkles className="w-4 h-4 text-mukanda-gold" />
            <span>Evolução do Projecto</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            Da Concepção Original à Versão 2.0 de Impacto Nacional
          </h2>
          <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
            Concebido originalmente em Novembro de 2023 como um estudo exploratório restrito, o projecto foi profundamente reestruturado em Maio de 2026 pela coordenação científica do <strong>Eng. Benone Marcos, PhD</strong>, expandindo a sua escala e rigor para responder às necessidades estruturais de todo o país.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-subtle border border-line space-y-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-subtle border border-line text-ink-soft">Versão Original (2023)</span>
              <h3 className="font-display font-semibold text-lg text-ink">Estudo de Nicho Exploratório</h3>
              <ul className="text-xs text-ink-soft space-y-2 list-disc pl-4">
                <li>Âmbito restrito a um único grupo profissional.</li>
                <li>Abordagem metodológica mista simples com duração de 12 meses.</li>
                <li>Orçamento não quantificado e sem pilotagem provincial diversificada.</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-surface border border-line border-l-2 border-l-mukanda-terracotta space-y-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-mukanda-terracotta text-white">Versão Actual 2.0 (2026–2029)</span>
              <h3 className="font-display font-semibold text-lg text-ink">Programa Estratégico Nacional</h3>
              <ul className="text-xs text-ink-soft space-y-2 list-disc pl-4">
                <li>População geral de Angola com foco em 3 províncias: Luanda, Huíla e Uíge.</li>
                <li>Certificação directa de 2.500 cidadãos e 120 formadores multiplicadores.</li>
                <li>Adaptação do DigComp 2.2, painel Delphi e criação do Índice ILDA.</li>
                <li>48 meses de execução com plano de dados abertos FAIR e financiamento diversificado.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Os 6 Pacotes de Trabalho (WP1 a WP6) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="kicker">Estrutura Metodológica</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
              Os 6 Pacotes de Trabalho (Work Packages)
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft">
              Metodologia de elevada robustez científica (desenho misto sequencial explanatório) orientada a resultados mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workPackages.map((wp) => (
              <div key={wp.code} className="card card-hover p-6 hover:border-line-strong transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-md border border-line bg-subtle text-mukanda-indigo flex items-center justify-center font-mono font-semibold text-xs">
                    {wp.code}
                  </span>
                  <span className="text-2xs font-mono font-semibold px-2 py-0.5 rounded bg-subtle text-ink-soft">ACITE</span>
                </div>
                <h4 className="font-display font-semibold text-base text-ink">{wp.title}</h4>
                <p className="text-[0.8125rem] text-ink-soft leading-relaxed">{wp.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Governação & Liderança Científica */}
        <div className="card p-6 sm:p-10 space-y-6">
          <div className="kicker">
            <Users className="w-4 h-4 text-mukanda-terracotta" />
            <span>Corpo Científico &amp; Coordenação</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            Estrutura de Governação e Investigação
          </h2>
          <p className="text-ink-soft text-sm leading-relaxed">
            A coordenação institucional está ancorada na <strong>Academia de Ciências Sociais e Tecnologias (ACITE)</strong>, assegurando independência científica, salvaguarda deontológica e validação por pares nacionais e internacionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {leadership.map((lead, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-subtle border border-line space-y-3">
                <span className="text-2xs font-semibold px-2 py-0.5 rounded bg-mukanda-indigo text-white">{lead.badge}</span>
                <h4 className="font-display font-semibold text-lg text-ink">{lead.name}</h4>
                <div className="text-xs text-mukanda-terracotta font-semibold">{lead.role}</div>
                <div className="text-xs text-ink-muted font-medium">{lead.institution}</div>
                <p className="text-[0.8125rem] text-ink-soft pt-2 border-t border-line">{lead.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Financiamento */}
        <section className="card p-6 sm:p-10">
          <p className="kicker">
            <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
            Sustentabilidade e recursos
          </p>
          <h2 className="mt-4 font-display font-semibold text-2xl sm:text-3xl text-ink">
            Modelo de financiamento
          </h2>
          <p className="mt-3 prose-mukanda max-w-prose">
            O projecto assenta num modelo de financiamento diversificado, que combina apoio
            público nacional à investigação, cooperação internacional, contrapartida
            institucional da ACITE e mecenato do sector privado. Nenhuma fonte isolada é
            determinante para a viabilidade do programa.
          </p>
          <p className="mt-3 prose-mukanda max-w-prose">
            Os processos de candidatura encontram-se em preparação. A composição definitiva do
            financiamento, os montantes contratados e a respectiva execução serão publicados
            no painel de transparência à medida que forem formalizados, nos termos das
            obrigações de reporte de cada entidade financiadora.
          </p>
        </section>

        {/* CTA */}
        <div className="pt-2">
          <Link href="/transparencia" className="btn-primary">
            Consultar o painel de transparência e entregáveis
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>

      </div>
    </>
  );
}
