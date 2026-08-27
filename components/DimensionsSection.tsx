'use client';

import React, { useState } from 'react';
import { 
  Database, 
  MessageSquare, 
  PenTool, 
  ShieldAlert, 
  Wrench, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function DimensionsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const dimensions = [
    {
      id: "dim1",
      number: "01",
      title: "Informação & Literacia de Dados",
      shortTitle: "1. Info & Dados",
      icon: Database,
      color: "from-orange-500 to-mukanda-terracotta",
      border: "border-orange-500",
      textColor: "text-orange-600",
      bgLight: "bg-orange-50",
      description: "Articula a capacidade de pesquisar, filtrar, avaliar criticamente e gerir dados e conteúdos digitais em contextos de sobrecarga informacional e desinformação.",
      competencies: [
        "Navegação, pesquisa e filtragem crítica de dados e notícias",
        "Avaliação da fiabilidade de fontes e identificação de notícias falsas (fake news)",
        "Gestão, armazenamento e organização de ficheiros em nuvem e memórias físicas",
        "Tratamento ético e arquivamento de informação institucional e pessoal"
      ],
      angolaContext: "Essencial para mitigar a propagação de burlas e esquemas de desinformação via redes sociais e WhatsApp em Angola."
    },
    {
      id: "dim2",
      number: "02",
      title: "Comunicação & Colaboração Digital",
      shortTitle: "2. Comunicação & Redes",
      icon: MessageSquare,
      color: "from-sky-500 to-blue-700",
      border: "border-sky-500",
      textColor: "text-sky-600",
      bgLight: "bg-sky-50",
      description: "Compreende a interação cívica através de tecnologias, partilha ética de recursos, colaboração em equipa remota e etiqueta de conduta na rede.",
      competencies: [
        "Interacção através de múltiplas tecnologias e canais de comunicação digital",
        "Partilha e transferência de informação com atribuição de autoria",
        "Participação cívica através de serviços públicos digitais e canais do Estado",
        "Netiqueta, convivência comunitária e gestão da pegada/identidade digital"
      ],
      angolaContext: "Promove o uso produtivo dos portais do Governo, serviços de registo civil, bancos móveis e plataformas académicas."
    },
    {
      id: "dim3",
      number: "03",
      title: "Criação de Conteúdo Digital",
      shortTitle: "3. Criação de Conteúdo",
      icon: PenTool,
      color: "from-amber-500 to-mukanda-gold",
      border: "border-amber-500",
      textColor: "text-amber-600",
      bgLight: "bg-amber-50",
      description: "Desenvolvimento de conteúdos digitais em múltiplos formatos (texto, imagem, áudio, vídeo), direitos de autor e introdução ao pensamento computacional.",
      competencies: [
        "Desenvolvimento e edição de documentos, apresentações e recursos multimédia",
        "Integração e reformulação de conteúdos respeitando direitos autorais",
        "Compreensão de licenças abertas (Creative Commons) e protecção de propriedade",
        "Noções de programação básica e pensamento algorítmico (fundamentado em Tusona)"
      ],
      angolaContext: "Capacita docentes, estudantes e empreendedores a produzir conteúdos locais relevantes e a valorizar a cultura angolana."
    },
    {
      id: "dim4",
      number: "04",
      title: "Segurança & Protecção de Privacidade",
      shortTitle: "4. Segurança & Privacidade",
      icon: ShieldAlert,
      color: "from-emerald-500 to-teal-700",
      border: "border-emerald-500",
      textColor: "text-emerald-600",
      bgLight: "bg-emerald-50",
      description: "Proteção de equipamentos, salvaguarda de dados pessoais e senhas, segurança em transações financeiras e bem-estar físico e psicológico no uso digital.",
      competencies: [
        "Protecção de dispositivos (smartphones, computadores) contra vírus e malware",
        "Protecção da privacidade e dos dados pessoais (senhas seguras, 2FA)",
        "Prevenção contra esquemas de phishing, clonagem de SIM e burla bancária",
        "Saúde, ergonomia e bem-estar físico e emocional no ecossistema digital"
      ],
      angolaContext: "Resposta directa aos crescentes desafios de engenharia social, fraudes financeiras e segurança de dados em território nacional."
    },
    {
      id: "dim5",
      number: "05",
      title: "Resolução de Problemas no Contexto Local",
      shortTitle: "5. Resolução de Problemas",
      icon: Wrench,
      color: "from-purple-500 to-indigo-700",
      border: "border-purple-500",
      textColor: "text-purple-600",
      bgLight: "bg-purple-50",
      description: "Identificação e resolução de avarias técnicas, adaptação de soluções a ambientes com restrição de conectividade ou energia e auto-aprendizagem contínua.",
      competencies: [
        "Resolução de problemas técnicos do quotidiano (conectividade fraca, espaço em disco)",
        "Identificação de necessidades e escolha da ferramenta tecnológica adequada",
        "Uso criativo da tecnologia para resolver desafios comunitários e de negócios",
        "Identificação de lacunas de competência pessoal e auto-actualização digital"
      ],
      angolaContext: "Foco na realidade de Angola: estratégias offline-first, gestão eficiente de pacotes de dados e resiliência comunitária."
    }
  ];

  const current = dimensions[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-indigo/5 text-mukanda-indigo text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-mukanda-gold" />
            <span>Estrutura Psicométrica do AngoComp</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F2C59] tracking-tight">
            As 5 Dimensões Estruturantes de Literacia Digital
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Adaptadas cientificamente a partir do referencial europeu <strong>DigComp 2.2</strong> e validadas empiricamente pela ACITE para as realidades socioculturais, linguísticas e infraestruturais de Angola.
          </p>
        </div>

        {/* Dimension Tabs (Desktop & Mobile Scroll) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {dimensions.map((dim, index) => {
            const DimIcon = dim.icon;
            const isSelected = activeTab === index;
            return (
              <button
                key={dim.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 border ${
                  isSelected
                    ? `bg-[#0F2C59] text-white border-[#0F2C59] shadow-lg`
                    : `bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50`
                }`}
              >
                <DimIcon className={`w-4 h-4 ${isSelected ? 'text-mukanda-gold' : dim.textColor}`} />
                <span>{dim.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Active Dimension Showcase Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual & Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${current.color} p-3.5 text-white shadow-lg flex items-center justify-center`}>
                <IconComponent className="w-full h-full" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Dimensão {current.number} • ILDA
                </span>
                <h3 className="font-display font-black text-2xl text-[#0F2C59] leading-tight">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>

            {/* Angola Context Callout */}
            <div className={`p-4 rounded-xl ${current.bgLight} border border-slate-200/80`}>
              <div className="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-1">
                <span>📍 Relevância no Contexto Angolano</span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                {current.angolaContext}
              </p>
            </div>
          </div>

          {/* Right Competencies List (7 cols) */}
          <div className="lg:col-span-7 space-y-4 lg:border-l lg:border-slate-100 lg:pl-8">
            <h4 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span>Competências Chave Avaliadas (Níveis A1 a C2)</span>
            </h4>

            <div className="space-y-3">
              {current.competencies.map((comp, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 hover:bg-slate-100/70 transition-colors">
                  <div className={`w-5 h-5 rounded-full ${current.bgLight} ${current.textColor} flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">
                    {comp}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white text-xs sm:text-sm font-bold shadow-md shadow-mukanda-terracotta/20 transition-all"
              >
                <span>Avaliar a sua proficiência nesta dimensão</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/questionarios"
                className="text-xs font-semibold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
              >
                Ver instrumentos de inquérito WP1 →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
