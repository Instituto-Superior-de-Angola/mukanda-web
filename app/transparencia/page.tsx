import React from 'react';
import TimelineGantt from '@/components/TimelineGantt';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileCheck2, 
  Database, 
  Download, 
  AlertTriangle, 
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

export default function TransparenciaPage() {
  const auditPoints = [
    { title: "Auditoria Financeira Semestral", desc: "Contas e relatórios de despesas auditados por entidades externas independentes.", status: "Conforme" },
    { title: "Comité de Ética & TCLE", desc: "Consentimento informado por escrito para todos os 1.500 inquiridos e 2.500 formandos.", status: "Aprovado" },
    { title: "Anonimização de Microdados", desc: "Supressão total de identificadores directos antes da publicação em repositório FAIR.", status: "Vigente" },
    { title: "Supervisão do CCI", desc: "Comité Científico Internacional com actas e pareceres metodológicos arquivados.", status: "Ativo" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header */}
        <div className="bg-[#0F2C59] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mukanda-gold-light text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-mukanda-emerald" />
              <span>Governação, Prestação de Contas &amp; Dados Abertos</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Painel de Transparência &amp; Progresso
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O Projecto Mukanda rege-se pelos mais elevados padrões de integridade científica, auditoria pública e transparência, mantendo salvaguardada a confidencialidade e a privacidade individual.
            </p>
          </div>
        </div>

        {/* 1. O Equilíbrio entre Transparência e Confidencialidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box 1: O que é Público e Transparente */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-mukanda-emerald font-display font-bold text-lg">
              <Eye className="w-6 h-6" />
              <span>Transparência Pública Activa</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Elementos disponibilizados publicamente para consulta de cidadãos, comunidade académica e órgãos de controlo:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
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
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-3 text-mukanda-terracotta font-display font-bold text-lg">
              <Lock className="w-6 h-6" />
              <span>Salvaguarda de Confidencialidade</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Informação sujeita a restrição de acesso e sigilo ético ao abrigo da legislação e das normas da ACITE:
            </p>
            <ul className="space-y-2 text-xs text-slate-700">
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
              <span className="text-xs font-mono font-bold text-mukanda-terracotta uppercase">Progresso em Tempo Real</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
                Roteiro de Entregáveis (2026–2029)
              </h2>
            </div>
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-200 text-slate-700 self-start sm:self-auto">
              Horizonte de 48 Meses
            </span>
          </div>

          <TimelineGantt />
        </div>

        {/* 3. Princípios FAIR & Repositório Científico */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-mukanda-indigo text-xs font-mono font-bold uppercase tracking-wider">
            <Database className="w-4 h-4 text-mukanda-gold" />
            <span>Ciência Aberta &amp; Reprodutibilidade</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
            Compromisso com os Princípios FAIR (Data Management Plan)
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Em conformidade com o <em>Anexo I (Plano de Gestão de Dados)</em>, todos os instrumentos, dicionários de variáveis e conjuntos de dados empíricos gerados pelo projecto obedecerão aos princípios internacionais <strong>FAIR (Findable, Accessible, Interoperable, Reusable)</strong>:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-display font-bold text-sm text-[#0F2C59]">1. Localizável (Findable)</div>
              <p className="text-xs text-slate-600">Atribuição de identificadores persistentes (DOIs) a relatórios e bases de dados.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-display font-bold text-sm text-[#0F2C59]">2. Acessível (Accessible)</div>
              <p className="text-xs text-slate-600">Repositório institucional aberto via protocolo padrão HTTPS com metadados abertos.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-display font-bold text-sm text-[#0F2C59]">3. Interoperável (Interoperable)</div>
              <p className="text-xs text-slate-600">Formatos abertos (.CSV, .JSON, .PDF, .TYP) com vocabulários controlados.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="font-display font-bold text-sm text-[#0F2C59]">4. Reutilizável (Reusable)</div>
              <p className="text-xs text-slate-600">Licenças Creative Commons (CC BY-NC 4.0) permitindo investigação secundária.</p>
            </div>
          </div>
        </div>

        {/* 4. Auditoria e Controlo de Qualidade */}
        <div className="bg-[#0F2C59] text-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-mukanda-gold-light uppercase">Auditoria &amp; Conformidade</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Garantia de Qualidade e Supervisão Externa
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Mecanismos institucionais contínuos para assegurar a conformidade orçamental e metodológica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {auditPoints.map((pt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-mukanda-emerald-light">{pt.status}</span>
                  <ShieldCheck className="w-4 h-4 text-mukanda-gold" />
                </div>
                <h4 className="font-display font-bold text-sm text-white">{pt.title}</h4>
                <p className="text-xs text-slate-300">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
