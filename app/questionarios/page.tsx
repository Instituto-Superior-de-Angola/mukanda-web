'use client';

import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function QuestionariosPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<'populacao' | 'escolas' | 'empresas'>('populacao');
  const { dict } = useTranslation();

  const surveys = {
    populacao: {
      title: "Inquérito Populacional de Literacia Digital (WP1)",
      target: `População Geral (N=1.500) • ${dict.common.luanda}, ${dict.common.huila} e ${dict.common.uige}`,
      code: "INQ-WP1-POP-2026",
      estimatedTime: "20 a 25 minutos",
      sections: [
        { name: "Secção A", title: "Caracterização Sociodemográfica & Acesso a Equipamentos", items: 8 },
        { name: "Secção B", title: "Padrões de Uso da Internet, Operadoras e Redes Sociais", items: 10 },
        { name: "Secção C", title: "Auto-Avaliação nas 5 Dimensões AngoComp (Escala Likert 1-5)", items: 25 },
        { name: "Secção D", title: "Mini-Desafios de Desempenho e Filtragem de Fake News", items: 6 },
        { name: "Secção E", title: "Segurança Digital, Incidentes de Burla e Confiança em Serviços", items: 7 }
      ]
    },
    escolas: {
      title: "Inquérito a Docentes e Instituições de Ensino (WP1/WP3)",
      target: "Professores do Ensino Secundário e Universitário (N=300)",
      code: "INQ-WP1-EDU-2026",
      estimatedTime: "15 a 20 minutos",
      sections: [
        { name: "Secção A", title: "Infraestrutura Tecnológica da Instituição", items: 6 },
        { name: "Secção B", title: "Integração de Recursos Digitais no Processo de Ensino", items: 12 },
        { name: "Secção C", title: "Necessidades de Capacitação Docente AngoComp", items: 15 },
        { name: "Secção D", title: "Avaliação de Competências de Criação de Conteúdo Pedagógico", items: 8 }
      ]
    },
    empresas: {
      title: "Inquérito de Necessidades do Mercado e Sector Privado",
      target: "Gestores de RH, PMEs e Profissionais de TI (N=150)",
      code: "INQ-WP1-EMP-2026",
      estimatedTime: "15 minutos",
      sections: [
        { name: "Secção A", title: "Perfil Empresarial e Nível de Digitalização", items: 5 },
        { name: "Secção B", title: "Lacunas de Competência Digital em Novos Contratados", items: 10 },
        { name: "Secção C", title: "Demanda por Certificação Oficial AngoComp no Recrutamento", items: 6 }
      ]
    }
  };

  const curr = surveys[selectedSurvey];

  return (
    <>
      <PageHeader
        kicker="Instrumentos de recolha · WP1"
        title="Questionários científicos do projecto"
        lead="A estrutura metodológica dos inquéritos de linha de base é publicada antes da recolha de dados, permitindo escrutínio independente, réplica e reutilização por outras equipas de investigação."
        meta={[
          { label: 'Instrumentos', value: '3 inquéritos complementares' },
          { label: 'Amostra total', value: '1.950 respondentes' },
          { label: 'Escala', value: 'Likert 1–5 e itens de desempenho' },
          { label: 'Licença', value: 'Reutilização com atribuição' },
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
            ['populacao', 'Inquérito populacional (N=1.500)'],
            ['escolas', 'Docentes e escolas (N=300)'],
            ['empresas', 'Mercado e sector privado (N=150)'],
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
              <span className="text-xs font-mono font-semibold text-ink-muted uppercase tracking-wider">
                Código do Instrumento: {curr.code}
              </span>
              <h3 className="font-display font-semibold text-2xl text-ink mt-1">
                {curr.title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-soft mt-1 font-medium">
                Público-Alvo: {curr.target} • Duração Média: {curr.estimatedTime}
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-subtle text-ink-soft shrink-0 self-start sm:self-auto">
              WP1 / ACITE
            </span>
          </div>

          {/* Sections List */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-sm text-ink uppercase tracking-wider">
              Estrutura Modular de Perguntas
            </h4>

            {curr.sections.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-subtle border border-line flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white border border-line text-mukanda-indigo">
                    {sec.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-ink">
                    {sec.title}
                  </span>
                </div>
                <span className="text-xs text-ink-muted font-mono shrink-0">{sec.items} itens</span>
              </div>
            ))}
          </div>

          {/* Ethics callout */}
          <div className="p-4 rounded-xl bg-subtle border border-line text-xs text-ink-soft flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-mukanda-emerald shrink-0 mt-0.5" />
            <span>
              Todos os questionários contêm termo de consentimento prévio (TCLE) aprovado pela comissão de ética da ACITE e são anonimizados no acto de submissão.
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
