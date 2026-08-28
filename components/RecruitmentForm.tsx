'use client';

import React, { useState } from 'react';
import { Users, Send, CheckCircle2, Briefcase, MapPin, GraduationCap, FileText, Sparkles, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/LanguageContext';

export default function RecruitmentForm() {
  const { dict } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    biNumber: '',
    role: 'inquiridor',
    province: dict.common.luanda,
    municipality: '',
    academicLevel: 'Licenciatura (Em Curso ou Concluída)',
    institution: '',
    experience: '',
    motivation: '',
    agreeDataProtection: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const roles = [
    {
      id: 'inquiridor',
      title: 'Inquiridor(a) de Campo (WP1)',
      description: 'Aplicação presencial e recolha de inquéritos (N=1.500) em Luanda, Huíla ou Uíge.',
      vacancies: '45 Vagas (15 por província)'
    },
    {
      id: 'formador',
      title: 'Formador(a) Multiplicador(a) AngoComp (WP3)',
      description: 'Capacitação pedagógica de cidadãos nas 5 dimensões do quadro digital.',
      vacancies: '120 Vagas Nacionais'
    },
    {
      id: 'investigador_jr',
      title: 'Investigador(a) Júnior / Assistente Estatístico (WP1/WP2)',
      description: 'Apoio à modelação psicométrica, análise fatorial e tratamento de dados FAIR.',
      vacancies: '6 Vagas (ACITE Luanda)'
    },
    {
      id: 'voluntario',
      title: 'Voluntário(a) Comunitário(a) de Inclusão Digital',
      description: 'Apoio logístico nas bancadas comunitárias e suporte a idosos e mulheres no teste digital.',
      vacancies: 'Vagas Contínuas'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.agreeDataProtection) {
      setErrorMessage('Por favor aceite o termo de tratamento de dados e consentimento ético.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/recrutamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setTrackingCode(data.trackingCode);
        setSubmissionSuccess(true);
      } else {
        setErrorMessage(data.message || 'Ocorreu um erro ao submeter a sua candidatura. Tente novamente.');
      }
    } catch {
      // Nunca simular sucesso: o candidato tem de saber que a submissão não chegou ao
      // servidor, sob pena de julgar-se inscrito sem o estar.
      setErrorMessage(
        'Não foi possível contactar o servidor. Verifique a ligação à Internet e submeta novamente.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="card p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-5">
        <div className="w-14 h-14 rounded-md border border-line bg-subtle text-mukanda-emerald mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
          Candidatura Registada com Sucesso!
        </h3>

        <p className="text-ink-soft text-sm leading-relaxed">
          A sua manifestação de interesse para a equipa do <strong>Projecto Mukanda</strong> foi recebida pela Coordenação de Recursos Humanos e Metodologia da ACITE.
        </p>

        <div className="p-4 rounded-xl bg-subtle border border-line text-ink font-mono text-sm max-w-md mx-auto">
          <div className="text-xs text-ink-muted uppercase">Código de Acompanhamento:</div>
          <div className="text-lg font-semibold text-mukanda-terracotta mt-1">{trackingCode}</div>
          <div className="text-2xs text-ink-muted mt-1">Guarde este código para consulta e verificação de convocatórias.</div>
        </div>

        <div className="text-xs text-ink-muted max-w-md mx-auto">
          Os candidatos seleccionados para a fase de entrevistas e oficinas metodológicas receberão uma notificação oficial por e-mail e contacto telefónico.
        </div>

        <button
          onClick={() => {
            setSubmissionSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              biNumber: '',
              role: 'inquiridor',
              province: 'Luanda',
              municipality: '',
              academicLevel: 'Licenciatura (Em Curso ou Concluída)',
              institution: '',
              experience: '',
              motivation: '',
              agreeDataProtection: false
            });
          }}
          className="btn-primary text-[0.8125rem]"
        >
          Submeter Nova Inscrição
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-10 max-w-4xl mx-auto">
      
      <div className="mb-8 pb-6 border-b border-line">
        <div className="flex items-center gap-2 text-mukanda-terracotta text-xs uppercase font-mono font-semibold tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-mukanda-gold" />
          <span>Oportunidades &amp; Convocatórias ACITE</span>
        </div>
        <h3 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
          Formulário de Inscrição e Recrutamento
        </h3>
        <p className="text-ink-soft text-sm mt-1">
          Preencha os seus dados para participar como inquiridor(a) de campo, formador(a) multiplicador(a) ou assistente de investigação do Projecto Mukanda.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Step 1: Select Role */}
        <div>
          <label className="block font-display font-semibold text-sm text-ink mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-mukanda-terracotta" />
            <span>1. Seleccione a Função / Perfil Pretendido</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {roles.map((r) => {
              const isSelected = formData.role === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => setFormData({ ...formData, role: r.id })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-mukanda-terracotta bg-mukanda-terracotta/5'
                      : 'border-line hover:border-line-strong bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className={`font-semibold text-xs sm:text-sm ${isSelected ? 'text-mukanda-terracotta' : 'text-ink'}`}>
                      {r.title}
                    </h5>
                    <span className="text-2xs font-mono font-semibold px-2 py-0.5 rounded bg-subtle text-ink-soft shrink-0">
                      {r.vacancies}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Personal Identification */}
        <div>
          <label className="block font-display font-semibold text-sm text-ink mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-mukanda-terracotta" />
            <span>2. Dados de Identificação Pessoal</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Nome Completo *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Ex: Manuel António da Silva"
                className="field"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">N.º do Bilhete de Identidade (B.I.) *</label>
              <input
                type="text"
                required
                value={formData.biNumber}
                onChange={(e) => setFormData({ ...formData, biNumber: e.target.value })}
                placeholder="Ex: 000000000LA000"
                className="field font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Correio Electrónico (E-mail) *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="exemplo@gmail.com"
                className="field"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Telefone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+244 9XX XXX XXX"
                className="field font-mono"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Territorial Location */}
        <div>
          <label className="block font-display font-semibold text-sm text-ink mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-mukanda-terracotta" />
            <span>3. Localização &amp; Disponibilidade Geográfica</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Província de Candidatura *</label>
              <select
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                className="field"
              >
                <option value="Luanda">Luanda (Metropolitano)</option>
                <option value="Huíla">Huíla (Urbano Interior)</option>
                <option value="Uíge">Uíge (Predominantemente Rural)</option>
                <option value="Outra">Outra Província de Angola</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Município / Bairro de Residência *</label>
              <input
                type="text"
                required
                value={formData.municipality}
                onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                placeholder="Ex: Talatona, Lubango, Negage, etc."
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Step 4: Academic Background */}
        <div>
          <label className="block font-display font-semibold text-sm text-ink mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-mukanda-terracotta" />
            <span>4. Percurso Académico &amp; Competências</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Nível de Escolaridade *</label>
              <select
                value={formData.academicLevel}
                onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                className="field"
              >
                <option value="Ensino Médio / Secundário">Ensino Médio / Secundário Concluído</option>
                <option value="Licenciatura (Em Curso ou Concluída)">Licenciatura (Em Curso ou Concluída)</option>
                <option value="Mestrado / Pós-Graduação">Mestrado / Pós-Graduação</option>
                <option value="Doutoramento">Doutoramento / PhD</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-soft mb-1">Instituição de Ensino / Faculdade</label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                placeholder="Ex: ACITE, UAN, ISCED, etc."
                className="field"
              />
            </div>
          </div>
        </div>

        {/* Step 5: Motivation & Summary */}
        <div>
          <label className="block font-display font-semibold text-sm text-ink mb-1 flex items-center gap-2">
            <FileText className="w-4 h-4 text-mukanda-terracotta" />
            <span>5. Experiência Prévia &amp; Declaração de Motivação</span>
          </label>
          <textarea
            rows={4}
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
            placeholder="Descreva resumidamente a sua experiência em inquéritos, ensino, informática ou liderança comunitária, e por que deseja integrar o Projecto Mukanda..."
            className="field"
          ></textarea>
        </div>

        {/* Ethics Consent Checkbox */}
        <div className="p-4 rounded-xl bg-subtle border border-line">
          <label className="flex items-start gap-3 cursor-pointer text-[0.8125rem] text-ink-soft leading-relaxed">
            <input
              type="checkbox"
              checked={formData.agreeDataProtection}
              onChange={(e) => setFormData({ ...formData, agreeDataProtection: e.target.checked })}
              className="mt-0.5 rounded border-line-strong text-mukanda-terracotta focus:ring-mukanda-indigo"
            />
            <span>
              Declaro que as informações prestadas são verdadeiras e autorizo a <strong>ACITE (Academia de Ciências Sociais e Tecnologias)</strong> a processar os meus dados pessoais para efeitos de selecção e gestão do Projecto Mukanda, em conformidade com as normas éticas e o Plano de Gestão de Dados FAIR.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-dark text-white font-display font-semibold text-sm shadow-card flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>A Submeter Candidatura...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submeter Candidatura Oficial</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
