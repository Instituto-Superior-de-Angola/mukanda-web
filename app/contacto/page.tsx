'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ShieldCheck, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export default function ContactoPage() {
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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mukanda-terracotta/10 text-mukanda-terracotta text-xs font-mono font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4 text-mukanda-terracotta" />
            <span>Contacto &amp; Canal de Integridade</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#0F2C59] tracking-tight">
            Fale Connosco
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Entre em contacto com a coordenação científica do Projecto Mukanda ou utilize o nosso canal confidencial de ética e sugestões.
          </p>
        </div>

        {/* 2-Columns: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-[#0F2C59]">
                Sede Institucional &amp; Coordenação
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-mukanda-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong>ACITE — Academia de Ciências Sociais e Tecnologias</strong><br />
                    Instituto Superior de Angola<br />
                    Luanda, República de Angola
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-mukanda-gold shrink-0" />
                  <div>
                    <a href="mailto:investigacao@acite.ao" className="hover:text-mukanda-terracotta transition-colors font-medium">
                      investigacao@acite.ao
                    </a><br />
                    <span className="text-xs text-slate-400">bmarcos@acite.ao (Investigador Principal)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-mukanda-emerald shrink-0" />
                  <div className="font-mono">
                    +244 9XX XXX XXX
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h5 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-2">Pólos Regionais</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong>Pólo Huíla:</strong> Lubango
                  </div>
                  <div className="p-2 rounded bg-slate-50 border border-slate-100">
                    <strong>Pólo Uíge:</strong> Uíge / Negage
                  </div>
                </div>
              </div>
            </div>

            {/* Ethics Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-mukanda-gold-light font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-mukanda-emerald" />
                <span>Canal de Integridade &amp; Ética</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pode enviar mensagens de forma totalmente anónima para relatar dúvidas sobre inquéritos de campo, sugerir melhorias ou reportar qualquer inconformidade com o código ético do projecto.
              </p>
            </div>

          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-mukanda-emerald mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#0F2C59]">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Agradecemos o seu contacto. A nossa equipa responderá com a maior brevidade possível.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'informacao', message: '', isAnonymousEthics: false });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#0F2C59] text-white text-xs font-bold hover:bg-slate-800 transition-all"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-[#0F2C59] mb-4">
                    Envie uma Mensagem à Coordenação
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        O seu Nome {formData.isAnonymousEthics ? '(Opcional)' : '*'}
                      </label>
                      <input
                        type="text"
                        required={!formData.isAnonymousEthics}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={formData.isAnonymousEthics ? "Anónimo" : "Ex: Maria Silva"}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-mukanda-terracotta"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Correio Electrónico {formData.isAnonymousEthics ? '(Opcional)' : '*'}
                      </label>
                      <input
                        type="email"
                        required={!formData.isAnonymousEthics}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="exemplo@dominio.ao"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-mukanda-terracotta"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Assunto da Mensagem</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-mukanda-terracotta"
                    >
                      <option value="informacao">Pedido Geral de Informação</option>
                      <option value="parceria">Parceria Científica ou Apoio Institucional</option>
                      <option value="duvida_inquerito">Dúvidas sobre o Inquérito em Campo (WP1)</option>
                      <option value="etica">Canal de Ética &amp; Sugestão de Integridade</option>
                      <option value="imprensa">Contacto de Imprensa &amp; Entrevistas</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mensagem *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva detalhadamente a sua mensagem..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-mukanda-terracotta"
                    ></textarea>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700">
                      <input
                        type="checkbox"
                        checked={formData.isAnonymousEthics}
                        onChange={(e) => setFormData({ ...formData, isAnonymousEthics: e.target.checked })}
                        className="rounded border-slate-300 text-mukanda-terracotta focus:ring-mukanda-terracotta"
                      />
                      <span className="font-medium">Enviar como comunicação anónima para o Canal de Ética</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white font-display font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
    </div>
  );
}
