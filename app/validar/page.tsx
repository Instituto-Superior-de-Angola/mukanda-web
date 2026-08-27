import React from 'react';
import CertificateLookup from '@/components/CertificateLookup';
import { ShieldCheck, Award, CheckCircle2, Lock } from 'lucide-react';

export default function ValidarPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-gold/10 text-amber-900 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-mukanda-gold" />
            <span>Serviço Público de Validação Académica</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
            Validação de Certificados AngoComp
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Plataforma pública e segura para verificação da autenticidade de certificados emitidos no âmbito do Projecto Mukanda pela ACITE.
          </p>
        </div>

        {/* Certificate Lookup Tool */}
        <CertificateLookup />

        {/* Informative Security Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-mukanda-indigo shrink-0 mt-0.5" />
            <span><strong>Registo Criptográfico:</strong> Cada certificado possui uma assinatura digital única gerada no momento da homologação pela ACITE.</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
            <span><strong>Aceitação Institucional:</strong> Os certificados AngoComp são reconhecidos para efeitos de progressão e comprovação de proficiência digital.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
