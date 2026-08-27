'use client';

import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, Globe, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function QuestionariosPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<'populacao' | 'escolas' | 'empresas'>('populacao');

  const surveys = {
    populacao: {
      title: "Inquérito Populacional de Literacia Digital (WP1)",
      target: "População Geral (N=1.500) • Luanda, Huíla e Uíge",
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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-indigo/10 text-mukanda-indigo text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-4 h-4 text-mukanda-gold" />
            <span>Instrumentos de Pesquisa &amp; Inquéritos WP1</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
            Questionários Científicos Online
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Consulte a estrutura metodológica dos inquéritos de linha de base e aceda aos módulos digitais para aplicação assistida em campo.
          </p>
        </div>

        {/* Survey Type Selector */}
        <div className="flex justify-center gap-3 flex-wrap">
          <button
            onClick={() => setSelectedSurvey('populacao')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              selectedSurvey === 'populacao'
                ? 'bg-mukanda-terracotta text-white border-mukanda-terracotta shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Inquérito Populacional (N=1.500)
          </button>
          <button
            onClick={() => setSelectedSurvey('escolas')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              selectedSurvey === 'escolas'
                ? 'bg-mukanda-indigo text-white border-mukanda-indigo shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Inquérito a Docentes &amp; Escolas
          </button>
          <button
            onClick={() => setSelectedSurvey('empresas')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
              selectedSurvey === 'empresas'
                ? 'bg-mukanda-emerald text-white border-mukanda-emerald shadow-md'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Mercado &amp; Sector Privado
          </button>
        </div>

        {/* Selected Survey Detail Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200 max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Código do Instrumento: {curr.code}
              </span>
              <h3 className="font-display font-black text-2xl text-[#0F2C59] mt-1">
                {curr.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Público-Alvo: {curr.target} • Duração Média: {curr.estimatedTime}
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 shrink-0 self-start sm:self-auto">
              WP1 / ACITE
            </span>
          </div>

          {/* Sections List */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
              Estrutura Modular de Perguntas
            </h4>

            {curr.sections.map((sec, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-white border border-slate-200 text-mukanda-indigo">
                    {sec.name}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {sec.title}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-mono shrink-0">{sec.items} itens</span>
              </div>
            ))}
          </div>

          {/* Ethics callout */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-mukanda-emerald shrink-0 mt-0.5" />
            <span>
              Todos os questionários contêm termo de consentimento prévio (TCLE) aprovado pela comissão de ética da ACITE e são anonimizados no acto de submissão.
            </span>
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/diagnostico"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white text-xs sm:text-sm font-bold shadow-md shadow-mukanda-terracotta/20 flex items-center justify-center gap-2 transition-all"
            >
              <span>Experimentar Módulo de Diagnóstico Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/recrutamento"
              className="text-xs font-bold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
            >
              Candidatar-se para aplicar inquéritos em campo →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
