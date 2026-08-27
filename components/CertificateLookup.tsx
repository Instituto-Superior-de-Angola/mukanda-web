'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, AlertCircle, Award, Calendar, MapPin, User, FileText } from 'lucide-react';

export default function CertificateLookup() {
  const [code, setCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  const mockDatabase: Record<string, any> = {
    'MUK-2026-002500': {
      code: 'MUK-2026-002500',
      recipient: 'Manuel António da Silva',
      biNumber: '004819203LA042',
      level: 'Nível Intermédio B2 (Quadro AngoComp)',
      hours: '60 Horas',
      province: 'Luanda',
      cohort: 'Turma Piloto 01 / 2026',
      issueDate: '15 de Agosto de 2026',
      status: 'VÁLIDO & HOMOLOGADO',
      issuer: 'ACITE (Instituto Superior de Angola)',
      signatories: 'Eng. Benone Marcos, PhD (Investigador Principal) & Conselho Científico da ACITE'
    },
    'MUK-2026-00120': {
      code: 'MUK-2026-00120',
      recipient: 'Maria Teresa dos Santos',
      biNumber: '007129482HU021',
      level: 'Formador(a) Multiplicador(a) AngoComp (Nível C1)',
      hours: '120 Horas',
      province: 'Huíla (Lubango)',
      cohort: 'Capacitação Docente WP3',
      issueDate: '20 de Setembro de 2026',
      status: 'VÁLIDO & HOMOLOGADO',
      issuer: 'ACITE (Instituto Superior de Angola)',
      signatories: 'Eng. Benone Marcos, PhD & Coordenação Pedagógica'
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setIsSearching(true);
    setNotFound(false);
    setResult(null);

    setTimeout(() => {
      const cleanCode = code.trim().toUpperCase();
      if (mockDatabase[cleanCode]) {
        setResult(mockDatabase[cleanCode]);
      } else if (cleanCode.startsWith('MUK-')) {
        // Generate simulated valid certificate for demo
        setResult({
          code: cleanCode,
          recipient: 'Cidadão Certificado(a) de Demonstração',
          biNumber: '00XXXXXXXXXLA000',
          level: 'Nível Intermédio B2 (Quadro AngoComp)',
          hours: '60 Horas',
          province: 'Luanda / Huíla / Uíge',
          cohort: 'Programa de Inclusão Nacional',
          issueDate: 'Agosto de 2026',
          status: 'VÁLIDO & HOMOLOGADO',
          issuer: 'ACITE (Instituto Superior de Angola)',
          signatories: 'Eng. Benone Marcos, PhD & Conselho Científico'
        });
      } else {
        setNotFound(true);
      }
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10 max-w-3xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <div className="w-12 h-12 rounded-xl bg-mukanda-indigo/10 text-mukanda-indigo mx-auto flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-mukanda-gold" />
        </div>
        <h3 className="font-display font-black text-2xl text-[#0F2C59]">
          Verificador Oficial de Certificados AngoComp
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
          Insira o código alfanumérico impresso no certificado ou contido no QR Code para atestar a respectiva autenticidade académica.
        </p>
      </div>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto mb-8">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ex: MUK-2026-002500"
          className="flex-1 px-4 py-3 rounded-xl border border-slate-300 font-mono text-sm uppercase focus:outline-none focus:ring-2 focus:ring-mukanda-terracotta"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="px-6 py-3 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-light text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all shrink-0 disabled:opacity-50"
        >
          <Search className="w-4 h-4" />
          <span>{isSearching ? 'A Verificar...' : 'Verificar'}</span>
        </button>
      </form>

      {/* Result Card */}
      {result && (
        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Certificado Autêntico &amp; Registado</span>
            </div>
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-900">
              {result.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-xs text-slate-500 font-medium">Titular / Cidadão(ã):</span>
              <div className="font-bold text-slate-900 text-base">{result.recipient}</div>
            </div>

            <div>
              <span className="text-xs text-slate-500 font-medium">Documento de Identificação (B.I.):</span>
              <div className="font-mono font-bold text-slate-800">{result.biNumber}</div>
            </div>

            <div>
              <span className="text-xs text-slate-500 font-medium">Nível de Competência:</span>
              <div className="font-bold text-mukanda-indigo">{result.level}</div>
            </div>

            <div>
              <span className="text-xs text-slate-500 font-medium">Carga Horária &amp; Província:</span>
              <div className="font-bold text-slate-800">{result.hours} • {result.province}</div>
            </div>

            <div>
              <span className="text-xs text-slate-500 font-medium">Data de Emissão:</span>
              <div className="font-medium text-slate-700">{result.issueDate}</div>
            </div>

            <div>
              <span className="text-xs text-slate-500 font-medium">Entidade Emissora:</span>
              <div className="font-medium text-slate-700">{result.issuer}</div>
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200/60 text-[11px] text-slate-600 font-mono">
            Homologado por: {result.signatories}
          </div>
        </div>
      )}

      {notFound && (
        <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
          <h4 className="font-bold text-sm text-red-800">Código Não Encontrado</h4>
          <p className="text-xs text-red-600 max-w-md mx-auto">
            Não foi encontrado nenhum certificado associado ao código fornecido. Verifique se digitou os caracteres correctamente ou contacte os serviços académicos da ACITE.
          </p>
        </div>
      )}
    </div>
  );
}
