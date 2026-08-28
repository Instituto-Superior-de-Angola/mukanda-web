'use client';

import PageHeader from '@/components/PageHeader';
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function ContactoPage() {
  const { dict } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'informacao',
    message: '',
    isAnonymousEthics: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

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
                    <span className="text-xs text-ink-muted">bmarcos@acite.ao (Investigador Principal)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-mukanda-emerald shrink-0" />
                  <div className="font-mono">
                    +244 9XX XXX XXX
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-line">
                <h5 className="font-semibold text-xs uppercase text-ink-muted tracking-wider mb-2">Pólos Regionais</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-ink-soft">
                  <div className="p-2 rounded bg-subtle border border-line">
                    <strong>Pólo Huíla:</strong> Lubango
                  </div>
                  <div className="p-2 rounded bg-subtle border border-line">
                    <strong>Pólo Uíge:</strong> Uíge / Negage
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
                Pode enviar mensagens de forma totalmente anónima para relatar dúvidas sobre inquéritos de campo, sugerir melhorias ou reportar qualquer inconformidade com o código ético do projecto.
              </p>
            </div>

          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-10">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-md border border-line bg-subtle text-mukanda-emerald mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-display font-semibold text-2xl text-ink">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-ink-soft max-w-md mx-auto">
                    Agradecemos o seu contacto. A nossa equipa responderá com a maior brevidade possível.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'informacao', message: '', isAnonymousEthics: false });
                    }}
                    className="btn-primary text-[0.8125rem]"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-semibold text-xl text-ink mb-4">
                    Envie uma Mensagem à Coordenação
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-soft mb-1">
                        O seu Nome {formData.isAnonymousEthics ? '(Opcional)' : '*'}
                      </label>
                      <input
                        type="text"
                        required={!formData.isAnonymousEthics}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={formData.isAnonymousEthics ? "Anónimo" : "Ex: Maria Silva"}
                        className="field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink-soft mb-1">
                        Correio Electrónico {formData.isAnonymousEthics ? '(Opcional)' : '*'}
                      </label>
                      <input
                        type="email"
                        required={!formData.isAnonymousEthics}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="exemplo@dominio.ao"
                        className="field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-soft mb-1">Assunto da Mensagem</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="field"
                    >
                      <option value="informacao">Pedido Geral de Informação</option>
                      <option value="parceria">Parceria Científica ou Apoio Institucional</option>
                      <option value="duvida_inquerito">Dúvidas sobre o Inquérito em Campo (WP1)</option>
                      <option value="etica">Canal de Ética &amp; Sugestão de Integridade</option>
                      <option value="imprensa">Contacto de Imprensa &amp; Entrevistas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ink-soft mb-1">Mensagem *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva detalhadamente a sua mensagem..."
                      className="field"
                    ></textarea>
                  </div>

                  <div className="p-3 rounded-lg bg-subtle border border-line">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-ink-soft">
                      <input
                        type="checkbox"
                        checked={formData.isAnonymousEthics}
                        onChange={(e) => setFormData({ ...formData, isAnonymousEthics: e.target.checked })}
                        className="rounded border-line-strong text-mukanda-terracotta focus:ring-mukanda-indigo"
                      />
                      <span className="font-medium">Enviar como comunicação anónima para o Canal de Ética</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-dark text-white font-display font-semibold text-sm shadow-card transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>A Enviar Mensagem...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </>
  );
}
