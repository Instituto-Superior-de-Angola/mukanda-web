'use client';

import React, { useState } from 'react';
import {
  Database,
  MessageSquare,
  PenTool,
  ShieldAlert,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function DimensionsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { dict } = useTranslation();

  const dimensions = [
    {
      id: "dim1",
      number: "01",
      title: dict.dimensions.dim1Title,
      shortTitle: "1. Info & Dados",
      icon: Database,
      description: dict.dimensions.dim1Desc,
      competencies: [
        "Navegação, pesquisa e filtragem crítica de dados e notícias",
        "Avaliação da fiabilidade de fontes e identificação de notícias falsas (fake news)",
        "Gestão, armazenamento e organização de ficheiros em nuvem e memórias físicas",
        "Tratamento ético e arquivamento de informação institucional e pessoal"
      ],
      angolaContext: dict.dimensions.dim1Angola
    },
    {
      id: "dim2",
      number: "02",
      title: dict.dimensions.dim2Title,
      shortTitle: "2. Comunicação & Redes",
      icon: MessageSquare,
      description: dict.dimensions.dim2Desc,
      competencies: [
        "Interacção através de múltiplas tecnologias e canais de comunicação digital",
        "Partilha e transferência de informação com atribuição de autoria",
        "Participação cívica através de serviços públicos digitais e canais do Estado",
        "Netiqueta, convivência comunitária e gestão da pegada/identidade digital"
      ],
      angolaContext: dict.dimensions.dim2Angola
    },
    {
      id: "dim3",
      number: "03",
      title: dict.dimensions.dim3Title,
      shortTitle: "3. Criação de Conteúdo",
      icon: PenTool,
      description: dict.dimensions.dim3Desc,
      competencies: [
        "Desenvolvimento e edição de documentos, apresentações e recursos multimédia",
        "Integração e reformulação de conteúdos respeitando direitos autorais",
        "Compreensão de licenças abertas (Creative Commons) e protecção de propriedade",
        "Noções de programação básica e pensamento algorítmico (fundamentado em Tusona)"
      ],
      angolaContext: dict.dimensions.dim3Angola
    },
    {
      id: "dim4",
      number: "04",
      title: dict.dimensions.dim4Title,
      shortTitle: "4. Segurança & Privacidade",
      icon: ShieldAlert,
      description: dict.dimensions.dim4Desc,
      competencies: [
        "Protecção de dispositivos (smartphones, computadores) contra vírus e malware",
        "Protecção da privacidade e dos dados pessoais (senhas seguras, 2FA)",
        "Prevenção contra esquemas de phishing, clonagem de SIM e burla bancária",
        "Saúde, ergonomia e bem-estar físico e emocional no ecossistema digital"
      ],
      angolaContext: dict.dimensions.dim4Angola
    },
    {
      id: "dim5",
      number: "05",
      title: dict.dimensions.dim5Title,
      shortTitle: "5. Resolução de Problemas",
      icon: Wrench,
      description: dict.dimensions.dim5Desc,
      competencies: [
        "Resolução de problemas técnicos do quotidiano (conectividade fraca, espaço em disco)",
        "Identificação de necessidades e escolha da ferramenta tecnológica adequada",
        "Uso criativo da tecnologia para resolver desafios comunitários e de negócios",
        "Identificação de lacunas de competência pessoal e auto-actualização digital"
      ],
      angolaContext: dict.dimensions.dim5Angola
    }
  ];

  const current = dimensions[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="py-16 lg:py-20 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da secção */}
        <div className="max-w-prose">
          <p className="kicker">
            <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
            {dict.dimensions.kicker}
          </p>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl tracking-tight text-ink">
            {dict.dimensions.title}
          </h2>
          <p className="mt-4 prose-mukanda">
            {dict.dimensions.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-px bg-line border border-line rounded-lg overflow-hidden">

          {/* Índice lateral das dimensões */}
          <nav className="lg:col-span-4 bg-surface" aria-label="Dimensões do quadro AngoComp">
            <ul className="divide-y divide-line">
              {dimensions.map((dim, index) => {
                const DimIcon = dim.icon;
                const isSelected = activeTab === index;
                return (
                  <li key={dim.id}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(index)}
                      aria-pressed={isSelected}
                      className={`w-full text-left px-5 py-4 flex items-start gap-3 transition-colors ${
                        isSelected
                          ? 'bg-subtle border-l-2 border-mukanda-terracotta'
                          : 'border-l-2 border-transparent hover:bg-subtle'
                      }`}
                    >
                      <DimIcon
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isSelected ? 'text-mukanda-terracotta' : 'text-ink-muted'
                        }`}
                        aria-hidden
                      />
                      <span>
                        <span className="block font-mono text-2xs text-ink-muted">
                          Dimensão {dim.number}
                        </span>
                        <span
                          className={`block text-[0.8125rem] font-medium ${
                            isSelected ? 'text-ink' : 'text-ink-soft'
                          }`}
                        >
                          {dim.title}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Dimensão em foco */}
          <article className="lg:col-span-8 bg-surface p-6 sm:p-8">
            <div className="flex items-start gap-4 pb-6 border-b border-line">
              <span className="w-11 h-11 rounded-md border border-line bg-subtle text-mukanda-indigo flex items-center justify-center shrink-0">
                <IconComponent className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-2xs uppercase tracking-kicker text-ink-muted">
                  Dimensão {current.number} · contribui para o índice ILDA
                </p>
                <h3 className="mt-1 font-display font-semibold text-2xl leading-tight text-ink">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="mt-6 prose-mukanda">{current.description}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <h4 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
                  Competências avaliadas
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {current.competencies.map((comp) => (
                    <li key={comp} className="flex gap-2.5 text-[0.8125rem] leading-relaxed text-ink-soft">
                      <span className="mt-[0.45rem] w-1 h-1 rounded-full bg-mukanda-terracotta shrink-0" aria-hidden />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-2xs font-semibold uppercase tracking-kicker text-ink-muted pb-2 border-b border-line">
                  Relevância no contexto angolano
                </h4>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-soft">
                  {current.angolaContext}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/diagnostico" className="btn-outline text-[0.8125rem] py-2">
                {dict.dimensions.ctaEvaluate}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/questionarios"
                className="text-2xs font-semibold uppercase tracking-kicker text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
              >
                {dict.dimensions.ctaSurveys}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
