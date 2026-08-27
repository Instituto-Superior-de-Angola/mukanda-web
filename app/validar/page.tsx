'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import CertificateLookup from '@/components/CertificateLookup';
import { Award, Lock } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ValidarPage() {
  const { dict } = useTranslation();

  return (
    <>
      <PageHeader
        kicker="Serviço público de verificação"
        title="Validação de certificados AngoComp"
        lead={`Plataforma pública para verificação da autenticidade dos certificados emitidos no âmbito do ${dict.common.projectName}. Introduza o código impresso no documento para confirmar o registo.`}
        meta={[
            { label: 'Emissor', value: dict.common.institutionFull },
            { label: 'Registo', value: 'Assinatura digital por certificado' },
            { label: 'Acesso', value: 'Público e gratuito' },
            { label: 'Cobertura', value: 'Emissões desde 2026' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Certificate Lookup Tool */}
        <CertificateLookup />

        {/* Informative Security Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs text-ink-soft">
          <div className="card p-4 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-mukanda-indigo shrink-0 mt-0.5" />
            <span><strong>Registo Criptográfico:</strong> Cada certificado possui uma assinatura digital única gerada no momento da homologação pela ACITE.</span>
          </div>

          <div className="card p-4 flex items-start gap-2.5">
            <Award className="w-4 h-4 text-mukanda-emerald shrink-0 mt-0.5" />
            <span><strong>Aceitação Institucional:</strong> Os certificados AngoComp são reconhecidos para efeitos de progressão e comprovação de proficiência digital.</span>
          </div>
        </div>

      </div>
    </>
  );
}
