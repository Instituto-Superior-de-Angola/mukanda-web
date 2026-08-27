import React from 'react';
import DiagnosticQuiz from '@/components/DiagnosticQuiz';
import { Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function DiagnosticoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-terracotta/10 text-mukanda-terracotta text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-mukanda-gold" />
            <span>Instrumento de Auto-Avaliação Psicométrica</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
            Diagnóstico Online de Competências Digitais
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Descubra o seu nível de proficiência digital nas 5 Dimensões do <strong>Quadro Angolano AngoComp</strong> através deste teste interactivo gratuito de 15 questões.
          </p>
        </div>

        {/* The Diagnostic Component */}
        <DiagnosticQuiz />

        {/* Explanatory notes below */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
            <span><strong>100% Confidencial:</strong> As suas respostas individuais são processadas localmente no seu navegador.</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-mukanda-gold shrink-0 mt-0.5" />
            <span><strong>Referencial Científico:</strong> Itens calibrados com base na matriz psicométrica do DigComp 2.2.</span>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
            <span><strong>Certificação Oficial:</strong> Conclua o teste para aceder prioritariamente às turmas de pilotagem de 60 horas.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
