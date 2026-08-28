'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import TimelineGantt from '@/components/TimelineGantt';
import { ShieldCheck, Lock, Eye, FileCheck2, Database } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function TransparenciaPage() {
  const { dict } = useTranslation();

  const auditPoints = [
    { title: "Auditoria Financeira Semestral", desc: "Contas e relatórios de despesas auditados por entidades externas independentes.", status: "Conforme" },
    { title: "Comité de Ética & TCLE", desc: "Consentimento informado por escrito para todos os 1.500 inquiridos e 2.500 formandos.", status: "Aprovado" },
    { title: "Anonimização de Microdados", desc: "Supressão total de identificadores directos antes da publicação em repositório FAIR.", status: "Vigente" },
    { title: "Supervisão do CCI", desc: "Comité Científico Internacional com actas e pareceres metodológicos arquivados.", status: "Ativo" }
  ];

  return (
    <>
      <PageHeader
        kicker="Governação, prestação de contas e dados abertos"
        title="Painel de transparência e progresso"
        lead={`O acompanhamento público do ${dict.common.projectName} cobre o estado de execução de cada pacote de trabalho, os entregáveis produzidos e os mecanismos de auditoria — salvaguardando sempre a confidencialidade dos participantes.`}
        meta={[
          { label: 'Última actualização', value: 'Agosto de 2026' },
          { label: 'Pacotes de trabalho', value: 'WP1 a WP6' },
          { label: 'Dados', value: 'FAIR · CC BY-NC 4.0' },
          { label: 'Supervisão', value: 'Comité Científico Internacional' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* 1. O Equilíbrio entre Transparência e Confidencialidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: O que é Público e Transparente */}
          <div className="card p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-mukanda-emerald font-display font-semibold text-lg">
              <Eye className="w-6 h-6" />
              <span>Transparência Pública Activa</span>
            </div>
            <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
              Elementos disponibilizados publicamente para consulta de cidadãos, comunidade académica e órgãos de controlo:
            </p>
            <ul className="space-y-2.5 text-[0.8125rem] text-ink-soft">
              <li className="flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>Sumário Executivo e Relatórios de Ponto de Situação e Evolução.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>Quadro AngoComp com descrição de competências e níveis psicométricos.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>Microdados brutos anonimizados (FAIR data) após conclusão das publicações.</span>
              </li>
              <li className="flex items-start gap-2">
                <FileCheck2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>Indicadores de execução física (número de certificados e formadores por província).</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Salvaguardas Éticas e Confidencialidade */}
          <div className="card p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-mukanda-terracotta font-display font-semibold text-lg">
              <Lock className="w-6 h-6" />
              <span>Salvaguarda de Confidencialidade</span>
            </div>
            <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
              Informação sujeita a restrição de acesso e sigilo ético ao abrigo da legislação e das normas da ACITE:
            </p>
            <ul className="space-y-2.5 text-[0.8125rem] text-ink-soft">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
                <span>Dados pessoais e identificadores directos (Nomes, B.I., Contactos) dos participantes.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
                <span>Bancos de itens de teste activos para prevenir fraudes em exames de certificação.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
                <span>Correspondência prévia e minutas contratuais em fase de negociação com financiadores.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
                <span>Dados de segurança institucional e propriedade intelectual prévia da ACITE.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 2. Cronograma de Execução e Pacotes de Trabalho */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="kicker">Cronograma de execução</span>
              <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
                Roteiro de Entregáveis (2026–2029)
              </h2>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-subtle border border-line text-ink-soft self-start sm:self-auto">
              Horizonte de 48 Meses
            </span>
          </div>

          <TimelineGantt />
        </div>

        {/* 3. Princípios FAIR & Repositório Científico */}
        <div className="card p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-2 text-mukanda-indigo text-xs font-mono font-semibold uppercase tracking-wider">
            <Database className="w-4 h-4 text-mukanda-gold" />
            <span>Ciência Aberta &amp; Reprodutibilidade</span>
          </div>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
            Compromisso com os Princípios FAIR (Data Management Plan)
          </h2>
          <p className="text-ink-soft text-sm leading-relaxed">
            Em conformidade com o <em>Anexo I (Plano de Gestão de Dados)</em>, todos os instrumentos, dicionários de variáveis e conjuntos de dados empíricos gerados pelo projecto obedecerão aos princípios internacionais <strong>FAIR (Findable, Accessible, Interoperable, Reusable)</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-subtle border border-line space-y-1">
              <div className="font-display font-semibold text-sm text-ink">1. Localizável (Findable)</div>
              <p className="text-xs text-ink-soft">Atribuição de identificadores persistentes (DOIs) a relatórios e bases de dados.</p>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-line space-y-1">
              <div className="font-display font-semibold text-sm text-ink">2. Acessível (Accessible)</div>
              <p className="text-xs text-ink-soft">Repositório institucional aberto via protocolo padrão HTTPS com metadados abertos.</p>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-line space-y-1">
              <div className="font-display font-semibold text-sm text-ink">3. Interoperável (Interoperable)</div>
              <p className="text-xs text-ink-soft">Formatos abertos (.CSV, .JSON, .PDF, .TYP) com vocabulários controlados.</p>
            </div>
            <div className="p-4 rounded-xl bg-subtle border border-line space-y-1">
              <div className="font-display font-semibold text-sm text-ink">4. Reutilizável (Reusable)</div>
              <p className="text-xs text-ink-soft">Licenças Creative Commons (CC BY-NC 4.0) permitindo investigação secundária.</p>
            </div>
          </div>
        </div>

        {/* 4. Auditoria e Controlo de Qualidade */}
        <section className="card p-6 sm:p-10">
          <p className="kicker">
            <span className="w-6 border-t border-mukanda-terracotta" aria-hidden />
            Auditoria e conformidade
          </p>
          <h2 className="mt-4 font-display font-semibold text-2xl sm:text-3xl text-ink">
            Garantia de qualidade e supervisão externa
          </h2>
          <p className="mt-3 prose-mukanda max-w-prose">
            Mecanismos institucionais permanentes que asseguram a conformidade orçamental, ética e
            metodológica do programa, com registo documental acessível às entidades de controlo.
          </p>

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {auditPoints.map((pt) => (
              <li key={pt.title} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                <h3 className="sm:col-span-4 font-display font-semibold text-[0.9375rem] text-ink">
                  {pt.title}
                </h3>
                <p className="sm:col-span-6 text-[0.8125rem] leading-relaxed text-ink-soft">{pt.desc}</p>
                <span className="sm:col-span-2 sm:text-right">
                  <span className="inline-flex items-center gap-1.5 text-2xs font-medium text-mukanda-emerald">
                    <span className="w-1.5 h-1.5 rounded-full bg-mukanda-emerald" aria-hidden />
                    {pt.status}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  );
}
