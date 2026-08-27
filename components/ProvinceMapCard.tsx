'use client';

import React, { useState } from 'react';
import { MapPin, Users, Building, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProvinceMapCard() {
  const [activeProvince, setActiveProvince] = useState<'luanda' | 'huila' | 'uige'>('luanda');

  const provinces = {
    luanda: {
      name: "Província de Luanda",
      type: "Tipo Metropolitano & Alta Densidade",
      color: "from-mukanda-terracotta to-orange-600",
      accent: "text-mukanda-terracotta",
      border: "border-mukanda-terracotta",
      bgBadge: "bg-mukanda-terracotta/10 text-mukanda-terracotta-dark",
      certifiedTarget: "1.000 Cidadãos",
      trainersTarget: "50 Formadores",
      sampleWP1: "700 Inquiridos",
      focusAreas: [
        "Transição digital nos serviços públicos e comércio formal/informal",
        "Competências de cibersegurança e combate a fraudes bancárias eletrónicas",
        "Empregabilidade jovem e literacia para o ecossistema tecnológico",
        "Validação de instrumentos psicométricos com alta densidade demográfica"
      ],
      description: "Como capital e centro financeiro do país, Luanda apresenta elevada penetração de infraestrutura de conectividade móvel, mas assimetrias marcantes no uso produtivo e seguro dos recursos digitais."
    },
    huila: {
      name: "Província da Huíla",
      type: "Tipo Urbano Interior & Pólo Universitário",
      color: "from-mukanda-gold to-amber-600",
      accent: "text-mukanda-gold",
      border: "border-mukanda-gold",
      bgBadge: "bg-mukanda-gold/10 text-amber-900",
      certifiedTarget: "800 Cidadãos",
      trainersTarget: "35 Formadores",
      sampleWP1: "450 Inquiridos",
      focusAreas: [
        "Integração do quadro AngoComp na formação docente e centros universitários",
        "Inclusão digital em cidades médias (Lubango e municípios periféricos)",
        "Capacitação para serviços de saúde, educação e agronegócio regional",
        "Estudo comparativo de retenção de competências no interior sul"
      ],
      description: "Representa o tecido sociocultural do sul de Angola, combinando uma sólida tradição académica no Lubango com comunidades periurbanas que beneficiam da formação multiplicadora."
    },
    uige: {
      name: "Província do Uíge",
      type: "Tipo Predominantemente Rural & Agrário",
      color: "from-mukanda-emerald to-emerald-600",
      accent: "text-mukanda-emerald",
      border: "border-mukanda-emerald",
      bgBadge: "bg-mukanda-emerald/10 text-emerald-950",
      certifiedTarget: "700 Cidadãos",
      trainersTarget: "35 Formadores",
      sampleWP1: "350 Inquiridos",
      focusAreas: [
        "Literacia digital de base e inclusão de cooperativas agrícolas",
        "Acesso à informação meteorológica, mercados e preços via smartphone",
        "Adaptação linguística e pedagógica dos conteúdos AngoComp",
        "Capacitação de líderes comunitários e agentes locais de desenvolvimento"
      ],
      description: "Constitui o cenário piloto fundamental para testar a resiliência e adaptação do quadro AngoComp em zonas de menor conectividade física e contextos rurais no norte de Angola."
    }
  };

  const curr = provinces[activeProvince];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Header with Province Selector Tabs */}
      <div className="bg-[#0F2C59] text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-mukanda-gold-light text-xs uppercase font-mono tracking-wider">
              <MapPin className="w-4 h-4 text-mukanda-gold" />
              <span>Pilotagem Territorial (WP3 &amp; WP4)</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              As 3 Províncias Tipológicas de Angola
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl">
              Desenho quase-experimental e representativo que assegura que o referencial <strong>AngoComp</strong> responde tanto à realidade da metrópole quanto ao interior e às comunidades rurais.
            </p>
          </div>

          {/* Selector Buttons */}
          <div className="flex items-center gap-2 bg-[#071326] p-1.5 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveProvince('luanda')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeProvince === 'luanda'
                  ? 'bg-mukanda-terracotta text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Luanda
            </button>
            <button
              onClick={() => setActiveProvince('huila')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeProvince === 'huila'
                  ? 'bg-mukanda-gold text-mukanda-indigo-dark shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Huíla
            </button>
            <button
              onClick={() => setActiveProvince('uige')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeProvince === 'uige'
                  ? 'bg-mukanda-emerald text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Uíge
            </button>
          </div>
        </div>
      </div>

      {/* Main Province Details Grid */}
      <div className="p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Summary */}
          <div className="lg:col-span-1 space-y-5">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${curr.bgBadge}`}>
                {curr.type}
              </span>
              <h4 className="font-display font-black text-2xl text-[#0F2C59] mt-2">
                {curr.name}
              </h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {curr.description}
              </p>
            </div>

            {/* Target Numbers Cards */}
            <div className="space-y-2.5 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className={`w-5 h-5 ${curr.accent}`} />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Meta de Cidadãos Certificados</div>
                    <div className="font-display font-bold text-lg text-slate-900">{curr.certifiedTarget}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">WP4</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building className={`w-5 h-5 ${curr.accent}`} />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Formadores Multiplicadores</div>
                    <div className="font-display font-bold text-lg text-slate-900">{curr.trainersTarget}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">WP3</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className={`w-5 h-5 ${curr.accent}`} />
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Amostra de Inquérito (WP1)</div>
                    <div className="font-display font-bold text-lg text-slate-900">{curr.sampleWP1}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">WP1</span>
              </div>
            </div>
          </div>

          {/* Right Focus Areas & Actions */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${curr.accent === 'text-mukanda-terracotta' ? 'bg-mukanda-terracotta' : curr.accent === 'text-mukanda-gold' ? 'bg-mukanda-gold' : 'bg-mukanda-emerald'}`}></span>
              <span>Prioridades Estratégicas &amp; Trabalho de Campo em {curr.name}</span>
            </h5>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {curr.focusAreas.map((area, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all flex items-start gap-3 shadow-sm">
                  <CheckCircle2 className={`w-5 h-5 ${curr.accent} shrink-0 mt-0.5`} />
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    {area}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Call to Action for this Province */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-[#0F2C59] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h6 className="font-bold text-sm text-mukanda-gold-light">Reside ou trabalha em {curr.name}?</h6>
                <p className="text-xs text-slate-300">Inscreva-se como inquiridor(a) de campo ou participe nas sessões de teste e formação.</p>
              </div>
              <Link
                href="/recrutamento"
                className="px-4 py-2 rounded-lg bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 transition-all shadow-md"
              >
                <span>Candidatar-se na {curr.name.replace('Província de ', '')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
