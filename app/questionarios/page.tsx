'use client';

import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function QuestionariosPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<'populacao' | 'escolas' | 'empresas'>('populacao');
  const { dict } = useTranslation();

  // A estrutura detalhada dos instrumentos — secções, número de itens e códigos
  // internos — não é publicada antes da recolha: divulgá-la permitiria preparar
  // respostas aos itens de desempenho e comprometeria a validade da linha de base.
  // O protocolo metodológico completo é depositado com as publicações científicas.
  const surveys = {
    populacao: {
      title: "Inquérito populacional de literacia digital (WP1)",
      target: `População geral • ${dict.common.luanda}, ${dict.common.huila} e ${dict.common.uige}`,
      estimatedTime: "20 a 25 minutos",
      dominios: [
        "Caracterização sociodemográfica e acesso a equipamentos",
        "Padrões de utilização da Internet e de serviços digitais",
        "Auto-avaliação nas cinco dimensões do AngoComp",
        "Itens de desempenho observado",
        "Segurança digital e confiança em serviços em linha",
      ],
    },
    escolas: {
      title: "Inquérito a docentes e instituições de ensino (WP1)",
      target: "Professores do ensino secundário e universitário",
      estimatedTime: "15 a 20 minutos",
      dominios: [
        "Infra-estrutura tecnológica da instituição",
        "Integração de recursos digitais na prática lectiva",
        "Necessidades de capacitação docente",
      ],
    },
    empresas: {
      title: "Inquérito de necessidades do mercado (WP1)",
      target: "Responsáveis de recursos humanos e profissionais de TIC",
      estimatedTime: "15 minutos",
      dominios: [
        "Perfil da organização e nível de digitalização",
        "Lacunas de competência digital identificadas no recrutamento",
        "Procura por certificação de competências",
      ],
    },
  };

  const curr = surveys[selectedSurvey];

  return (
    <>
      <PageHeader
        kicker="Instrumentos de recolha · WP1"
        title="Questionários científicos do projecto"
        lead="Os domínios temáticos dos inquéritos de linha de base são apresentados publicamente. O conteúdo dos itens e a estrutura detalhada dos instrumentos só são divulgados depois de concluída a recolha, para não comprometer a validade das medições — findo o trabalho de campo, são depositados com as publicações científicas, permitindo escrutínio independente e réplica."
        meta={[
          { label: 'Instrumentos', value: '3 inquéritos complementares' },
          { label: 'Pacote', value: 'WP1 — linha de base' },
          { label: 'Modo', value: 'Aplicação assistida por inquiridor' },
          { label: 'Divulgação', value: 'Após a recolha, com atribuição' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Selector de instrumento */}
        <div
          className="flex flex-wrap gap-2 border-b border-line pb-px max-w-4xl mx-auto"
          role="tablist"
          aria-label="Instrumentos de inquérito"
        >
          {([
            ['populacao', 'Inquérito populacional'],
            ['escolas', 'Docentes e escolas'],
            ['empresas', 'Mercado e sector privado'],
          ] as Array<[typeof selectedSurvey, string]>).map(([key, rotulo]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={selectedSurvey === key}
              onClick={() => setSelectedSurvey(key)}
              className={`px-4 py-2.5 text-sm font-medium -mb-px border-b-2 transition-colors ${
                selectedSurvey === key
                  ? 'border-mukanda-terracotta text-ink'
                  : 'border-transparent text-ink-muted hover:text-ink-soft'
              }`}
            >
              {rotulo}
            </button>
          ))}
        </div>

        {/* Selected Survey Detail Card */}
        <div className="card p-6 sm:p-10 max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
            <div>
              <h3 className="font-display font-semibold text-2xl text-ink mt-1">
                {curr.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft mt-1 font-medium">
                Público-alvo: {curr.target} • Duração média: {curr.estimatedTime}
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-subtle text-ink-soft shrink-0 self-start sm:self-auto">
              WP1 / ACITE
            </span>
          </div>

          {/* Domínios temáticos */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-ink uppercase tracking-wider">
              Domínios abrangidos
            </h4>

            {curr.dominios.map((dominio, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-subtle border border-line flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white border border-line text-mukanda-indigo shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-ink">{dominio}</span>
              </div>
            ))}
          </div>

          {/* Ethics callout */}
          <div className="p-4 rounded-xl bg-subtle border border-line text-xs text-ink-soft flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-mukanda-emerald shrink-0 mt-0.5" />
            <span>
              Todos os instrumentos incluem termo de consentimento livre e esclarecido e são submetidos à apreciação do Comité de Ética da ACITE antes de qualquer aplicação em campo. As respostas são anonimizadas no acto de recolha, nos termos da Lei n.º 22/11.
            </span>
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/diagnostico" className="btn-accent w-full sm:w-auto">
              Experimentar o módulo de diagnóstico
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>

            <Link
              href="/recrutamento"
              className="text-xs font-semibold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
            >
              Candidatar-se para aplicar inquéritos em campo →
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
