'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import RecruitmentForm from '@/components/RecruitmentForm';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function RecrutamentoPage() {
  const { dict } = useTranslation();

  return (
    <>
      <PageHeader
        kicker={dict.recruitmentPage.kicker}
        title={dict.recruitmentPage.title}
        lead={dict.recruitmentPage.subtitle}
        meta={[
            { label: 'Perfis', value: 'Inquiridor · formador · estatística' },
            { label: 'Territórios', value: `${dict.common.luanda}, ${dict.common.huila} e ${dict.common.uige}` },
            { label: 'Formação', value: 'Ministrada pela ACITE' },
            { label: 'Certificação', value: 'Formal, à conclusão' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Form Component */}
        <RecruitmentForm />

        {/* Benefits & Selection Steps */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="card p-6 space-y-2">
            <div className="w-9 h-9 rounded-md border border-line bg-subtle text-mukanda-terracotta flex items-center justify-center font-mono text-xs font-semibold">
              01
            </div>
            <h4 className="font-display font-semibold text-base text-ink">Capacitação Oficial</h4>
            <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
              Todos os candidatos seleccionados recebem formação metodológica intensiva ministrada pelo corpo docente da ACITE com certificação formal.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <div className="w-9 h-9 rounded-md border border-line bg-subtle text-mukanda-indigo flex items-center justify-center font-mono text-xs font-semibold">
              02
            </div>
            <h4 className="font-display font-semibold text-base text-ink">Experiência de Campo</h4>
            <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
              Participação directa em inquéritos populacionais de grande escala e ensaios quase-experimentais com tecnologias móveis de ponta.
            </p>
          </div>

          <div className="card p-6 space-y-2">
            <div className="w-9 h-9 rounded-md border border-line bg-subtle text-mukanda-emerald flex items-center justify-center font-mono text-xs font-semibold">
              03
            </div>
            <h4 className="font-display font-semibold text-base text-ink">Impacto Comunitário</h4>
            <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
              Contribuição activa para a redução da exclusão digital e emancipação económica de milhares de famílias em Angola.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
