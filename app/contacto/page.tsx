'use client';

import PageHeader from '@/components/PageHeader';
import React from 'react';
import { Mail, MapPin, ShieldCheck } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ContactoPage() {
  const { dict } = useTranslation();

  const ENDERECO = 'investigacao@acite.ao';

  const assuntos = [
    { etiqueta: 'Pedido geral de informação', assunto: '[Mukanda] Pedido de informação',
      descricao: 'Questões sobre o projecto, o AngoComp ou o calendário de execução.' },
    { etiqueta: 'Parceria científica ou apoio institucional', assunto: '[Mukanda] Parceria institucional',
      descricao: 'Propostas de colaboração académica, institucional ou de financiamento.' },
    { etiqueta: 'Dúvidas sobre o inquérito em campo', assunto: '[Mukanda] Inquérito de campo (WP1)',
      descricao: 'Confirmação da identidade de inquiridores e esclarecimento de procedimentos.' },
    { etiqueta: 'Acesso a dados de investigação', assunto: '[Mukanda] Pedido de acesso a dados',
      descricao: 'Pedidos fundamentados de acesso a microdados anonimizados e a instrumentos.' },
    { etiqueta: 'Canal de integridade e ética', assunto: '[Mukanda] Comunicação ao canal de ética',
      descricao: 'Comunicações sobre conduta de investigação, com tratamento confidencial.' },
    { etiqueta: 'Imprensa', assunto: '[Mukanda] Contacto de imprensa',
      descricao: 'Pedidos de entrevista, declarações e material para comunicação social.' },
  ];

  return (
    <>
      <PageHeader
        kicker="Contacto e canal de integridade"
        title="Contactar a coordenação científica"
        lead={`Dirija questões metodológicas, propostas de parceria ou pedidos de acesso a dados à coordenação do ${dict.common.projectName}. O canal de ética recebe comunicações confidenciais sobre conduta de investigação.`}
        meta={[
          { label: 'Coordenação', value: 'investigacao@acite.ao' },
          { label: 'Sede', value: `ACITE, ${dict.common.luanda} — Angola` },
          { label: 'Resposta', value: 'Até 5 dias úteis' },
          { label: 'Canal de ética', value: 'Tratamento confidencial' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* 2-Columns: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="card p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-semibold text-xl text-ink">
                Sede Institucional &amp; Coordenação
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-ink-soft">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-mukanda-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong>ACITE — Academia de Ciências Sociais e Tecnologias</strong><br />
                    Entidade proponente do Projecto Mukanda<br />
                    Luanda, República de Angola
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-mukanda-gold shrink-0" />
                  <div>
                    <a href="mailto:investigacao@acite.ao" className="hover:text-mukanda-terracotta transition-colors font-medium">
                      investigacao@acite.ao
                    </a><br />
                    <span className="text-xs text-ink-muted">Endereço único da coordenação científica</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Ethics Box */}
            <div className="rounded-lg p-6 border-l-2 border-mukanda-terracotta bg-subtle space-y-3">
              <div className="flex items-center gap-2 font-display font-semibold text-base text-ink">
                <ShieldCheck className="w-5 h-5 text-mukanda-emerald" aria-hidden />
                <span>Canal de integridade e ética</span>
              </div>
              <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
                Comunicações sobre conduta de investigação, dúvidas quanto a inquéritos de campo
                ou suspeitas de inconformidade com o código ético são dirigidas à coordenação
                científica e tratadas confidencialmente, com acesso restrito ao Investigador
                Principal. Um canal de denúncia anónima será disponibilizado com o arranque do
                trabalho de campo.
              </p>
            </div>

          </div>

          {/* Contacto directo (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-xl text-ink">
                  Escrever à coordenação
                </h3>
                <p className="text-[0.8125rem] text-ink-soft leading-relaxed">
                  Todas as comunicações são dirigidas ao endereço da coordenação científica.
                  Escolha o assunto que melhor descreve o seu pedido — a mensagem abre no seu
                  programa de correio com o assunto já preenchido.
                </p>
              </div>

              <ul className="divide-y divide-line border-t border-line">
                {assuntos.map((assunto) => (
                  <li key={assunto.etiqueta}>
                    <a
                      href={`mailto:${ENDERECO}?subject=${encodeURIComponent(assunto.assunto)}`}
                      className="group py-4 flex items-start justify-between gap-4 transition-colors"
                    >
                      <span className="space-y-1">
                        <span className="block font-display font-semibold text-[0.9375rem] text-ink group-hover:text-mukanda-terracotta transition-colors">
                          {assunto.etiqueta}
                        </span>
                        <span className="block text-[0.8125rem] leading-relaxed text-ink-soft">
                          {assunto.descricao}
                        </span>
                      </span>
                      <Mail className="w-4 h-4 text-ink-muted shrink-0 mt-1 group-hover:text-mukanda-terracotta transition-colors" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="p-4 rounded-xl bg-subtle border border-line text-xs text-ink-soft flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-mukanda-emerald shrink-0 mt-0.5" aria-hidden />
                <span>
                  Não inclua dados pessoais de terceiros, identificadores de participantes ou
                  documentação sensível na mensagem inicial. A coordenação indicará o meio
                  adequado sempre que o assunto o exija.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
