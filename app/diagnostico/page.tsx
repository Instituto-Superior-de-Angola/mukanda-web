'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import DiagnosticQuiz from '@/components/DiagnosticQuiz';
import { Award, ShieldCheck, BookOpen } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function DiagnosticoPage() {
  const { dict } = useTranslation();

  return (
    <>
      <PageHeader
        kicker={dict.diagnosticPage.kicker}
        title={dict.diagnosticPage.title}
        lead={dict.diagnosticPage.subtitle}
        meta={[
            { label: 'Itens', value: '15 questões calibradas' },
            { label: 'Duração', value: '8 a 12 minutos' },
            { label: 'Referencial', value: 'DigComp 2.2 adaptado' },
            { label: 'Dados', value: 'Processados no seu navegador' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* The Diagnostic Component */}
        <DiagnosticQuiz />

        {/* Explanatory notes below */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs text-ink-soft">
          <div className="card p-4 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
            <span><strong>100% Confidencial:</strong> As suas respostas individuais são processadas localmente no seu navegador.</span>
          </div>

          <div className="card p-4 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-mukanda-gold shrink-0 mt-0.5" />
            <span><strong>Referencial Científico:</strong> Itens calibrados com base na matriz psicométrica do DigComp 2.2.</span>
          </div>

          <div className="card p-4 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-mukanda-terracotta shrink-0 mt-0.5" />
            <span><strong>Certificação Oficial:</strong> Conclua o teste para aceder prioritariamente às turmas de pilotagem de 60 horas.</span>
          </div>
        </div>

      </div>
    </>
  );
}
