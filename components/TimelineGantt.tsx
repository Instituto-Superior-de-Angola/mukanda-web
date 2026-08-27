'use client';

import React from 'react';
import { Calendar, CheckCircle2, Clock, Award, Users, Database, FileText } from 'lucide-react';

export default function TimelineGantt() {
  const workPackages = [
    {
      code: "WP1",
      title: "Diagnóstico Empírico de Linha de Base",
      period: "Mês 01 – Mês 09 (Julho 2026 – Março 2027)",
      status: "Em Preparação / Submissão",
      statusColor: "bg-amber-100 text-amber-900 border-amber-300",
      leader: "Equipa de Metodologia & Estatística ACITE",
      deliverables: [
        "Inquérito Nacional de Base com N=1.500 amostras (Luanda, Huíla, Uíge)",
        "Relatório psicométrico preliminar de lacunas de literacia digital",
        "Base de dados anonimizada FAIR no Repositório Mukanda"
      ],
      progress: 15
    },
    {
      code: "WP2",
      title: "Concepção do Quadro AngoComp & Método Delphi",
      period: "Mês 07 – Mês 16 (Janeiro 2027 – Outubro 2027)",
      status: "Planeado",
      statusColor: "bg-slate-100 text-slate-800 border-slate-300",
      leader: "Comité Científico Internacional (CCI)",
      deliverables: [
        "Painel Delphi internacional com 30 peritos (Angola, UE, CPLP, UNESCO)",
        "Documento de especificação do Quadro AngoComp com 21 competências e 8 níveis",
        "Instrumento de auto-avaliação e testes baseados em desempenho"
      ],
      progress: 0
    },
    {
      code: "WP3",
      title: "Formação de 120 Formadores Multiplicadores",
      period: "Mês 15 – Mês 26 (Setembro 2027 – Agosto 2028)",
      status: "Planeado",
      statusColor: "bg-slate-100 text-slate-800 border-slate-300",
      leader: "Coordenação Pedagógica ACITE",
      deliverables: [
        "Manual do Formador AngoComp e kits pedagógicos multimédia",
        "Formação intensiva de 120 formadores (50 Luanda, 35 Huíla, 35 Uíge)",
        "Comunidade de prática online e rede de tutoria regional"
      ],
      progress: 0
    },
    {
      code: "WP4",
      title: "Pilotagem & Certificação de 2.500 Cidadãos",
      period: "Mês 24 – Mês 38 (Junho 2028 – Agosto 2029)",
      status: "Planeado",
      statusColor: "bg-slate-100 text-slate-800 border-slate-300",
      leader: "Equipas de Campo Provinciais",
      deliverables: [
        "Ensaio quasi-experimental com grupo de controlo (N=600)",
        "Capacitação e certificação formal de 2.500 cidadãos nas 3 províncias",
        "Avaliação de impacto socioeconómico pós-formação (6 meses)"
      ],
      progress: 0
    },
    {
      code: "WP5",
      title: "Construção do Índice ILDA & Transferência de Políticas",
      period: "Mês 36 – Mês 48 (Junho 2029 – Julho 2029)",
      status: "Planeado",
      statusColor: "bg-slate-100 text-slate-800 border-slate-300",
      leader: "Investigador Principal & MESCTI / INE",
      deliverables: [
        "Cálculo e publicação do 1.º Índice de Literacia Digital de Angola (ILDA)",
        "Transferência tecnológica do motor de diagnóstico para o INE e MESCTI",
        "Livro Branco de Recomendações de Política Pública para o Executivo"
      ],
      progress: 0
    },
    {
      code: "WP6",
      title: "Gestão, Comunicação, FAIR Data & Auditoria",
      period: "Mês 01 – Mês 48 (Transversal)",
      status: "Activo / Transversal",
      statusColor: "bg-blue-100 text-blue-900 border-blue-300",
      leader: "Gabinete de Gestão do Projecto (ACITE)",
      deliverables: [
        "Publicação de 6 artigos científicos em revistas internacionais indexadas",
        "Auditorias financeiras externas independentes semestrais",
        "Portal público de transparência e repositório de dados abertos"
      ],
      progress: 20
    }
  ];

  return (
    <div className="space-y-6">
      {workPackages.map((wp) => (
        <div 
          key={wp.code}
          className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center font-display font-black text-base shadow">
                {wp.code}
              </span>
              <div>
                <h4 className="font-display font-bold text-lg text-[#0F2C59]">{wp.title}</h4>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
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
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${wp.statusColor}`}>
                {wp.status}
              </span>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {wp.deliverables.map((del, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
                <span>{del}</span>
              </div>
            ))}
          </div>

          {/* Micro Progress Bar */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-4 text-xs text-slate-500">
            <span className="font-mono font-medium">Progresso Estimado da Fase:</span>
            <div className="flex-1 max-w-xs bg-slate-100 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-mukanda-terracotta to-mukanda-gold h-full rounded-full transition-all"
                style={{ width: `${wp.progress}%` }}
              ></div>
            </div>
            <span className="font-mono font-bold text-slate-700">{wp.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
