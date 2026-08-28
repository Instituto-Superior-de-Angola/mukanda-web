'use client';

import React, { useState } from 'react';
import { Search, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

/** Resposta do serviço de verificação (ver app/api/validar/route.ts). */
interface CertificadoVerificado {
  code: string;
  recipient: string;
  biNumber: string;
  level: string;
  province: string;
  issueDate: string;
  issuer: string;
  status?: string;
  hours?: string;
  notice?: string;
}

export default function CertificateLookup() {
  const [code, setCode] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<CertificadoVerificado | null>(null);
  const [notFound, setNotFound] = useState(false);

  const [erro, setErro] = useState<string | null>(null);

  /**
   * A verificação é feita no servidor, contra o registo de certificados.
   * A validade nunca é inferida no cliente a partir do formato do código: um validador
   * que aceitasse qualquer código com o prefixo correcto seria um oráculo de falsificação.
   */
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const consulta = code.trim().toUpperCase();
    if (!consulta) return;

    setIsSearching(true);
    setNotFound(false);
    setErro(null);
    setResult(null);

    try {
      const resposta = await fetch(`/api/validar?code=${encodeURIComponent(consulta)}`, {
        cache: 'no-store',
      });
      const dados = await resposta.json();

      if (resposta.ok && dados.valid) {
        setResult(dados);
      } else if (resposta.status === 429) {
        setErro('Demasiados pedidos consecutivos. Aguarde um momento e tente novamente.');
      } else if (resposta.status === 400) {
        setErro(dados.message ?? 'Formato de código inválido.');
      } else {
        setNotFound(true);
      }
    } catch {
      setErro('Não foi possível contactar o serviço de verificação. Tente novamente.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="card p-6 sm:p-10 max-w-3xl mx-auto">
      <div className="text-center space-y-2 mb-8">
        <div className="w-12 h-12 rounded-xl bg-mukanda-indigo/10 text-mukanda-indigo mx-auto flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-mukanda-gold" />
        </div>
        <h3 className="font-display font-semibold text-2xl text-ink">
          Verificador Oficial de Certificados AngoComp
        </h3>
        <p className="text-ink-soft text-xs sm:text-sm max-w-md mx-auto">
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
          className="field flex-1 font-mono uppercase"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="px-6 py-3 rounded-xl bg-mukanda-terracotta hover:bg-mukanda-terracotta-dark text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-card transition-all shrink-0 disabled:opacity-50"
        >
          <Search className="w-4 h-4" />
          <span>{isSearching ? 'A Verificar...' : 'Verificar'}</span>
        </button>
      </form>

      {/* Result Card */}
      {result && (
        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-200/60">
            <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Certificado Autêntico &amp; Registado</span>
            </div>
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-emerald-200/80 text-emerald-900">
              {result.status}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-xs text-ink-muted font-medium">Titular / Cidadão(ã):</span>
              <div className="font-semibold text-ink text-base">{result.recipient}</div>
            </div>

            <div>
              <span className="text-xs text-ink-muted font-medium">Documento de identificação (parcial):</span>
              <div className="font-mono font-semibold text-ink">{result.biNumber}</div>
            </div>

            <div>
              <span className="text-xs text-ink-muted font-medium">Nível de Competência:</span>
              <div className="font-semibold text-mukanda-indigo">{result.level}</div>
            </div>

            <div>
              <span className="text-xs text-ink-muted font-medium">Carga Horária &amp; Província:</span>
              <div className="font-semibold text-ink">{result.hours} • {result.province}</div>
            </div>

            <div>
              <span className="text-xs text-ink-muted font-medium">Data de Emissão:</span>
              <div className="font-medium text-ink-soft">{result.issueDate}</div>
            </div>

            <div>
              <span className="text-xs text-ink-muted font-medium">Entidade Emissora:</span>
              <div className="font-medium text-ink-soft">{result.issuer}</div>
            </div>
          </div>

          {result.notice && (
            <p className="pt-3 border-t border-emerald-200/60 text-2xs text-ink-soft">
              {result.notice}
            </p>
          )}
        </div>
      )}

      {erro && (
        <div className="p-5 rounded-lg bg-amber-50 border border-amber-200 text-center">
          <p className="text-[0.8125rem] text-amber-900">{erro}</p>
        </div>
      )}

      {notFound && (
        <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center space-y-2">
          <AlertCircle className="w-8 h-8 text-red-500 mx-auto" />
          <h4 className="font-semibold text-sm text-red-800">Código Não Encontrado</h4>
          <p className="text-xs text-red-600 max-w-md mx-auto">
            Não foi encontrado nenhum certificado associado ao código fornecido. Verifique se digitou os caracteres correctamente ou contacte os serviços académicos da ACITE.
          </p>
        </div>
      )}
    </div>
  );
}
