'use client';

import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function TimelineGantt() {
  // Janelas, objectos e entregáveis conforme o capítulo 7 da proposta técnica.
  // M1 = Setembro de 2026; M48 = Agosto de 2030.
  // O progresso mantém-se a zero enquanto não houver execução apurada: uma
  // percentagem inventada seria uma afirmação sem suporte documental.
  const workPackages = [
    {
      code: "WP1",
      title: "Diagnóstico de Linha de Base",
      period: "Mês 01 – Mês 09 (Setembro 2026 – Maio 2027)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Investigador Sénior — Sociologia",
      deliverables: [
        "Inquérito por amostragem probabilística em Luanda, Huíla e Uíge",
        "Componente qualitativa por focus groups e entrevistas a informantes-chave",
        "Relatório de linha de base revisto por pares"
      ],
      progress: 0
    },
    {
      code: "WP2",
      title: "Construção e Validação do AngoComp",
      period: "Mês 06 – Mês 15 (Fevereiro 2027 – Novembro 2027)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Investigador Sénior — Ciências da Educação",
      deliverables: [
        "Painel Delphi com 25 especialistas, até atingir consenso",
        "Quadro de competências em cinco dimensões e oito níveis (A1–C2)",
        "Tradução cultural para Kimbundu, Umbundu e Kikongo, e validação psicométrica"
      ],
      progress: 0
    },
    {
      code: "WP3",
      title: "Ensaio Comparado de Intervenções",
      period: "Mês 16 – Mês 30 (Dezembro 2027 – Fevereiro 2029)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Investigador Sénior — Ciências da Educação",
      deliverables: [
        "Ensaio quasi-experimental com três modalidades formativas e grupo de controlo",
        "Medições em pré-teste, pós-teste imediato e follow-up a seis meses",
        "Relatório de eficácia identificando a modalidade a escalar"
      ],
      progress: 0
    },
    {
      code: "WP4",
      title: "Escalamento Controlado e Certificação",
      period: "Mês 24 – Mês 42 (Agosto 2028 – Fevereiro 2030)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Coordenador de Trabalho de Campo",
      deliverables: [
        "Quatro Pólos AngoComp: três fixos e um móvel de cobertura rural",
        "Formação de 120 formadores multiplicadores",
        "Certificação de 2.500 cidadãos com credenciais verificáveis"
      ],
      progress: 0
    },
    {
      code: "WP5",
      title: "Índice de Literacia Digital de Angola",
      period: "Mês 30 – Mês 48 (Fevereiro 2029 – Agosto 2030)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Investigador Sénior — Ciências da Computação",
      deliverables: [
        "Índice compósito construído segundo o manual da OCDE",
        "Aplicação em amostra nacional, em parceria com o INE",
        "Duas edições publicadas do ILDA e transferência para o MESCTI"
      ],
      progress: 0
    },
    {
      code: "WP6",
      title: "Gestão, Disseminação e Sustentabilidade",
      period: "Mês 01 – Mês 48 (transversal)",
      status: "Planeado",
      statusColor: "bg-subtle text-ink border-line-strong",
      leader: "Investigador Principal",
      deliverables: [
        "Seis artigos em revistas indexadas, dos quais três em Q1 ou Q2",
        "Repositório FAIR de microdados anonimizados",
        "Plano de continuidade e transferência institucional dos instrumentos"
      ],
      progress: 0
    }
  ];

  return (
    <div className="space-y-6">
      {workPackages.map((wp) => (
        <div 
          key={wp.code}
          className="card card-hover p-5 sm:p-6 hover:border-line-strong transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-line">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-md border border-line bg-subtle text-mukanda-indigo flex items-center justify-center font-mono font-semibold text-sm">
                {wp.code}
              </span>
              <div>
                <h4 className="font-display font-semibold text-lg text-ink">{wp.title}</h4>
                <div className="flex items-center gap-3 text-xs text-ink-muted mt-0.5">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-mukanda-terracotta" />
                    <span>{wp.period}</span>
                  </span>
                  <span>•</span>
                  <span>Líder: {wp.leader}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-auto">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${wp.statusColor}`}>
                {wp.status}
              </span>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {wp.deliverables.map((del, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-subtle border border-line flex items-start gap-2 text-xs text-ink-soft">
                <CheckCircle2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>

          {/* Micro Progress Bar */}
          <div className="mt-4 pt-3 border-t border-line flex items-center justify-between gap-4 text-xs text-ink-muted">
            <span className="font-mono font-medium">Progresso Estimado da Fase:</span>
            <div className="flex-1 max-w-xs bg-subtle rounded-full h-2 overflow-hidden">
              <div 
                className="bg-mukanda-indigo h-full rounded-full transition-all"
                style={{ width: `${wp.progress}%` }}
              ></div>
            </div>
            <span className="font-mono font-semibold text-ink-soft">{wp.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
