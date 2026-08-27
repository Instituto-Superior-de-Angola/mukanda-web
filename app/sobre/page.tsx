import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  Building2, 
  Users, 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  FileSpreadsheet
} from 'lucide-react';

export default function SobrePage() {
  const leadership = [
    {
      name: "Eng. Benone Marcos, PhD",
      role: "Investigador Principal & Coordenador Geral",
      institution: "Academia de Ciências Sociais e Tecnologias (ACITE)",
      focus: "Arquitetura de Sistemas, Metodologia Psicométrica & Governação do Projecto",
      badge: "Investigador Principal"
    },
    {
      name: "Conselho Científico da ACITE",
      role: "Órgão Científico Proponente & Supervisão",
      institution: "Instituto Superior de Angola",
      focus: "Homologação Epistemológica, Certificação Docente & Ética",
      badge: "Supervisão Científica"
    },
    {
      name: "Comité Científico Internacional (CCI)",
      role: "Peritos Independentes & Painel Delphi",
      institution: "Angola, União Europeia, CPLP & UNESCO",
      focus: "Validação Cruzada do AngoComp com o DigComp 2.2 e Padrões Globais",
      badge: "Validação Internacional"
    }
  ];

  const workPackages = [
    { code: "WP1", title: "Diagnóstico Empírico de Linha de Base", focus: "Inquérito N=1.500 em Luanda, Huíla e Uíge; calibração estatística inicial." },
    { code: "WP2", title: "Concepção do Quadro AngoComp", focus: "Método Delphi com 30 peritos, definição de 21 competências e 8 níveis de proficiência." },
    { code: "WP3", title: "Formação de 120 Multiplicadores", focus: "Capacitação intensiva de formadores provinciais e criação de kits didácticos." },
    { code: "WP4", title: "Pilotagem & Certificação de 2.500 Cidadãos", focus: "Ensaio quase-experimental N=600 e certificação em massa nas três tipologias territoriais." },
    { code: "WP5", title: "Construção do Índice ILDA", focus: "Modelação psicométrica final e transferência institucional para o MESCTI e INE." },
    { code: "WP6", title: "Gestão, FAIR Data & Auditoria", focus: "Coordenação executiva, repositório de dados abertos e publicação de 6 artigos indexados." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="bg-[#0F2C59] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-mukanda-gold-light text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-mukanda-gold" />
              <span>Génese, Metodologia &amp; Governação</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Sobre o Projecto Mukanda (AngoComp)
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Concepção, validação e pilotagem de um instrumento científico de referência para o diagnóstico, certificação e promoção da literacia digital em Angola.
            </p>
          </div>
        </div>

        {/* 1. Evolução Histórica (2023 vs 2026) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 text-mukanda-terracotta text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-mukanda-gold" />
            <span>Evolução do Projecto</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
            Da Concepção Original à Versão 2.0 de Impacto Nacional
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Concebido originalmente em Novembro de 2023 como um estudo exploratório restrito, o projecto foi profundamente reestruturado em Maio de 2026 pela coordenação científica do <strong>Eng. Benone Marcos, PhD</strong>, expandindo a sua escala e rigor para responder às necessidades estruturais de todo o país.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-200 text-slate-700">Versão Original (2023)</span>
              <h3 className="font-display font-bold text-lg text-slate-900">Estudo de Nicho Exploratório</h3>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
                <li>Âmbito restrito a profissionais do sector de segurança do Estado.</li>
                <li>Abordagem metodológica mista simples com duração de 12 meses.</li>
                <li>Orçamento não quantificado e sem pilotagem provincial diversificada.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50/50 border-2 border-mukanda-terracotta space-y-3 shadow-md">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-mukanda-terracotta text-white">Versão Actual 2.0 (2026–2029)</span>
              <h3 className="font-display font-bold text-lg text-[#0F2C59]">Programa Estratégico Nacional</h3>
              <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
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
            <span className="text-xs font-mono font-bold text-mukanda-terracotta uppercase">Estrutura Metodológica</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
              Os 6 Pacotes de Trabalho (Work Packages)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Metodologia de elevada robustez científica (desenho misto sequencial explanatório) orientada a resultados mensuráveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workPackages.map((wp) => (
              <div key={wp.code} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center font-display font-black text-sm">
                    {wp.code}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">ACITE</span>
                </div>
                <h4 className="font-display font-bold text-base text-[#0F2C59]">{wp.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{wp.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Governação & Liderança Científica */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-2 text-mukanda-terracotta text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-mukanda-terracotta" />
            <span>Corpo Científico &amp; Coordenação</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0F2C59]">
            Estrutura de Governação e Investigação
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            A coordenação institucional está ancorada na <strong>Academia de Ciências Sociais e Tecnologias (ACITE)</strong>, assegurando independência científica, salvaguarda deontológica e validação por pares nacionais e internacionais.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {leadership.map((lead, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-mukanda-indigo text-white">{lead.badge}</span>
                <h4 className="font-display font-bold text-lg text-slate-900">{lead.name}</h4>
                <div className="text-xs text-mukanda-terracotta font-semibold">{lead.role}</div>
                <div className="text-xs text-slate-500 font-medium">{lead.institution}</div>
                <p className="text-xs text-slate-600 pt-2 border-t border-slate-200">{lead.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Financiamento Diversificado */}
        <div className="bg-[#0F2C59] text-white rounded-2xl p-6 sm:p-10 shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-mukanda-gold-light uppercase">Sustentabilidade &amp; Recursos</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Modelo de Financiamento Diversificado
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Orçamento global estimado em <strong>1.251.058.420 Kz</strong> estruturado de forma transparente entre apoio nacional, internacional e contrapartida institucional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-display font-black text-xl text-mukanda-gold">42,4%</div>
              <div className="text-xs font-semibold text-white mt-1">FUNDECIT</div>
              <div className="text-[10.5px] text-slate-400">MESCTI Angola</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-display font-black text-xl text-sky-400">33,9%</div>
              <div className="text-xs font-semibold text-white mt-1">União Europeia</div>
              <div className="text-[10.5px] text-slate-400">Prog. CAP4 / Diálogos</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-display font-black text-xl text-mukanda-emerald-light">11,0%</div>
              <div className="text-xs font-semibold text-white mt-1">ACITE (Contrapartida)</div>
              <div className="text-[10.5px] text-slate-400">Infraestrutura &amp; Docentes</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="font-display font-black text-xl text-purple-400">8,5%</div>
              <div className="text-xs font-semibold text-white mt-1">Sector Privado</div>
              <div className="text-[10.5px] text-slate-400">Telecomunicações</div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
              <div className="font-display font-black text-xl text-amber-300">4,2%</div>
              <div className="text-xs font-semibold text-white mt-1">UNESCO</div>
              <div className="text-[10.5px] text-slate-400">Literacia &amp; Inclusão</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/transparencia"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white font-display font-bold text-sm shadow-lg shadow-mukanda-terracotta/25 transition-all"
          >
            <span>Consultar o Painel de Transparência &amp; Entregáveis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
