import React from 'react';
import RecruitmentForm from '@/components/RecruitmentForm';
import { Users, Sparkles, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function RecrutamentoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-terracotta/10 text-mukanda-terracotta text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-4 h-4 text-mukanda-terracotta" />
            <span>Recrutamento &amp; Inscrições • ACITE Angola</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
            Faça Parte da Equipa Mukanda
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Estamos a seleccionar inquiridores de campo para Luanda, Huíla e Uíge, formadores multiplicadores e assistentes estatísticos de investigação. Submeta a sua candidatura online.
          </p>
        </div>

        {/* Form Component */}
        <RecruitmentForm />

        {/* Benefits & Selection Steps */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-mukanda-terracotta flex items-center justify-center font-bold">
              01
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">Capacitação Oficial</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Todos os candidatos seleccionados recebem formação metodológica intensiva ministrada pelo corpo docente da ACITE com certificação formal.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-mukanda-indigo flex items-center justify-center font-bold">
              02
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">Experiência de Campo</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Participação directa em inquéritos populacionais de grande escala e ensaios quase-experimentais com tecnologias móveis de ponta.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-mukanda-emerald flex items-center justify-center font-bold">
              03
            </div>
            <h4 className="font-display font-bold text-base text-slate-900">Impacto Comunitário</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Contribuição activa para a redução da exclusão digital e emancipação económica de milhares de famílias em Angola.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
