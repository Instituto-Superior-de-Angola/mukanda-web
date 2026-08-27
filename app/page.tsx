import React from 'react';
import Link from 'next/link';
import StatsTicker from '@/components/StatsTicker';
import ProvinceMapCard from '@/components/ProvinceMapCard';
import DimensionsSection from '@/components/DimensionsSection';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Compass, 
  Users, 
  FileText, 
  Sparkles,
  Download,
  BookOpen,
  ChevronRight,
  Database
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative bg-[#071326] text-white pt-16 pb-28 overflow-hidden">
        {/* Background Sona Grid Accent Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Glowing Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-mukanda-terracotta/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-mukanda-indigo/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Text Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-mukanda-gold-light">
                <span className="w-2 h-2 rounded-full bg-mukanda-emerald animate-pulse"></span>
                <span>INICIATIVA ESTRATÉGICA NACIONAL • ACITE ANGOLA</span>
              </div>

              {/* Mega Title */}
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                Da Iniciação Ancestral à <span className="bg-gradient-to-r from-mukanda-terracotta-light via-mukanda-gold to-amber-300 bg-clip-text text-transparent">Soberania Digital</span>
              </h1>

              {/* Subtitle & Problem Statement */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                O <strong>Projecto Mukanda</strong> desenvolve, valida psicometricamente e pilota o primeiro 
                <strong> Quadro Angolano de Competências Digitais (AngoComp)</strong> e o 
                <strong> Índice de Literacia Digital de Angola (ILDA)</strong>, capacitando 2.500 cidadãos e 120 formadores nas províncias de Luanda, Huíla e Uíge.
              </p>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/diagnostico"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-mukanda-terracotta to-mukanda-terracotta-light hover:brightness-110 text-white font-display font-bold text-sm shadow-xl shadow-mukanda-terracotta/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Award className="w-4 h-4 text-mukanda-gold-light" />
                  <span>Fazer Teste de Auto-Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/transparencia"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-mukanda-emerald" />
                  <span>Painel de Transparência</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mukanda-emerald" />
                  <span>Metodologia Baseada no DigComp 2.2</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-mukanda-gold" />
                  <span>Repositório FAIR &amp; Open Science</span>
                </span>
              </div>

            </div>

            {/* Right Hero Visual Column: Interactive Sona Portal Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0F2C59]/80 border border-white/15 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-mukanda-terracotta"></span>
                    <span className="font-display font-bold text-sm text-white">Quadro AngoComp</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-mukanda-gold/20 text-mukanda-gold">
                    Versão 2.0 (2026–2029)
                  </span>
                </div>

                {/* Center Stylized Isotype Display */}
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-mukanda-terracotta to-mukanda-indigo p-4 shadow-2xl flex items-center justify-center animate-float">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white drop-shadow">
                      <circle cx="50" cy="50" r="14" fill="#0F2C59" stroke="#FFFFFF" strokeWidth="4" />
                      <circle cx="50" cy="50" r="5" fill="#F59E0B" />
                      <path d="M 50 15 C 30 15, 15 30, 15 50 C 15 70, 35 80, 50 90 L 50 75 C 38 68, 30 58, 30 50 C 30 38, 38 30, 50 30 Z" fill="#FF6B35" />
                      <path d="M 50 15 C 70 15, 85 30, 85 50 C 85 70, 65 80, 50 90 L 50 75 C 62 68, 70 58, 70 50 C 70 38, 62 30, 50 30 Z" fill="#38BDF8" />
                      <polygon points="50,30 65,50 50,70 35,50" fill="#F59E0B" />
                      <circle cx="50" cy="15" r="4" fill="#F59E0B" />
                      <circle cx="15" cy="50" r="3.5" fill="#FF6B35" />
                      <circle cx="85" cy="50" r="3.5" fill="#38BDF8" />
                      <circle cx="50" cy="90" r="4" fill="#10B981" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-xl text-white mt-4 tracking-wide">
                    O Rito da Cidadania Digital
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs">
                    Inspirado na geometria dos ideogramas <em>Tusona</em> e ancorado na excelência universitária da ACITE.
                  </p>
                </div>

                {/* Quick Interactive Highlights */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Investigador Principal:</span>
                    <strong className="text-white font-medium">Eng. Benone Marcos, PhD</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Amostra Representativa:</span>
                    <strong className="text-mukanda-gold-light font-mono">1.500 Cidadãos (WP1)</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Entidade Proponente:</span>
                    <strong className="text-white">ACITE (Instituto Superior de Angola)</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. STATS TICKER STRIP */}
      {/* ========================================================================= */}
      <StatsTicker />

      {/* ========================================================================= */}
      {/* 3. MANIFESTO & ANCESTRAL PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mukanda-terracotta/10 text-mukanda-terracotta text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-mukanda-terracotta" />
                <span>Etimologia &amp; Filosofia</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F2C59] tracking-tight leading-tight">
                Porquê o Nome <span className="text-mukanda-terracotta">Mukanda</span>?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Na tradição milenar dos povos de Angola (Cokwe, Lunda, Mbunda, Luvale), a <strong>Mukanda</strong> é o rito e a escola tradicional de iniciação. Nela, as novas gerações aprendem a viver em comunidade, os códigos morais, as técnicas do quotidiano e a ciência ancestral, tornando-se cidadãos plenos.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                No século XXI, o <strong>Projecto Mukanda</strong> atualiza este arquétipo: a <strong>Literacia Digital</strong> é o novo rito contemporâneo indispensável para que nenhum angolano seja excluído das oportunidades da economia do conhecimento, garantindo a soberania tecnológica do país.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-mukanda-gold text-xs sm:text-sm text-slate-700 italic">
                &ldquo;O saber ancestral que outrora se desenhava nas areias do leste angolano encontra agora o pulsar dos dados e a luz dos ecrãs digitais.&rdquo;
              </div>

              <div className="pt-2">
                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 text-sm font-bold text-mukanda-indigo hover:text-mukanda-terracotta transition-colors"
                >
                  <span>Conheça a história e a equipa científica da ACITE</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-orange-50/50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-mukanda-terracotta text-white flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">Geometria Lusona</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inspiração na matemática e algoritmos dos desenhos na areia Cokwe, reconhecidos internacionalmente pela sua complexidade matricial.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-mukanda-indigo text-white flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">Rigor Psicométrico</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Validação estatística avançada através do modelo Rasch/TRI e inquérito com N=1.500 cidadãos em 3 províncias.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-mukanda-gold text-mukanda-indigo-dark flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">Multiplicação Cívica</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  120 formadores capacitados que garantem efeito multiplicador em escolas, administrações municipais e cooperativas.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-mukanda-emerald text-white flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">Transferência MESCTI/INE</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Criação e entrega do Índice de Literacia Digital de Angola (ILDA) para orientar as políticas públicas nacionais.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE 5 ANGOCOMP DIMENSIONS */}
      {/* ========================================================================= */}
      <DimensionsSection />

      {/* ========================================================================= */}
      {/* 5. TERRITORIAL PILOT: LUANDA, HUÍLA, UÍGE */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProvinceMapCard />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRANSPARENCY & RECRUITMENT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-br from-[#0F2C59] to-[#071326] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mukanda-gold/20 text-mukanda-gold-light text-xs font-bold uppercase tracking-wider font-mono">
                <Users className="w-4 h-4 text-mukanda-gold" />
                <span>Convocatórias Abertas • ACITE 2026</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Junte-se à Equipa do Projecto Mukanda
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Estamos a recrutar inquiridores de campo para Luanda, Huíla e Uíge, formadores multiplicadores e assistentes estatísticos de investigação. Candidate-se online de forma simples e rápida.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/recrutamento"
                className="px-6 py-3.5 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white font-display font-bold text-sm shadow-xl shadow-mukanda-terracotta/30 flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Submeter Inscrição para a Equipa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/marca"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm flex items-center justify-center gap-2 transition-all text-center"
              >
                <Download className="w-4 h-4 text-mukanda-gold" />
                <span>Descarregar Manual de Marca &amp; PDF</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
