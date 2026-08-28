import { randomInt } from 'node:crypto';
import { NextResponse } from 'next/server';
import {
  CABECALHOS_SEM_CACHE,
  lerCorpoJson,
  limitarFrequencia,
  normalizarTexto,
  origemDoPedido,
  validarBI,
  validarEmail,
  validarEnumeracao,
  validarTelefone,
} from '@/lib/seguranca/validacao';

export const dynamic = 'force-dynamic';

const PERFIS = ['inquiridor', 'formador', 'investigador_jr', 'voluntario'] as const;
const PROVINCIAS = ['Luanda', 'Huíla', 'Uíge', 'Outra'] as const;
const NIVEIS_ACADEMICOS = [
  'Ensino Médio / Secundário',
  'Licenciatura (Em Curso ou Concluída)',
  'Mestrado / Pós-Graduação',
  'Doutoramento',
] as const;

/**
 * Recepção de candidaturas à equipa do projecto.
 *
 * Recolhe dados pessoais sensíveis (nome e número de BI) ao abrigo do protocolo de ética.
 * Consequências para esta rota:
 *
 * - cada campo é validado por tipo, formato e comprimento máximo, com listas fechadas nos
 *   campos enumerados — nada é usado directamente a partir do corpo do pedido;
 * - o consentimento de tratamento de dados é obrigatório e verificado no servidor, não
 *   apenas no formulário;
 * - nenhum dado pessoal é registado em log nem devolvido na resposta;
 * - a resposta nunca é armazenada em cache.
 *
 * Nota de âmbito: nesta fase a candidatura é acusada mas não persistida. A persistência
 * entra com o WP1 e exigirá, além do aqui feito, cifragem em repouso e retenção definida
 * no plano de gestão de dados.
 */
export async function POST(request: Request) {
  const origem = origemDoPedido(request);
  const limite = limitarFrequencia(`recrutamento:${origem}`, 5, 60_000);
  if (!limite.permitido) {
    return NextResponse.json(
      { success: false, message: 'Demasiadas submissões. Tente novamente dentro de instantes.' },
      { status: 429, headers: { ...CABECALHOS_SEM_CACHE, 'Retry-After': String(limite.retentarEmSegundos) } }
    );
  }

  const corpo = await lerCorpoJson(request);
  if (!corpo.ok || !corpo.dados) {
    return NextResponse.json(
      { success: false, message: corpo.erro ?? 'Pedido inválido.' },
      { status: 400, headers: CABECALHOS_SEM_CACHE }
    );
  }

  const b = corpo.dados;

  const campos = {
    fullName: normalizarTexto(b.fullName, 120),
    email: validarEmail(b.email),
    phone: validarTelefone(b.phone),
    biNumber: validarBI(b.biNumber),
    role: validarEnumeracao(b.role, PERFIS),
    province: validarEnumeracao(b.province, PROVINCIAS),
  };

  const emFalta = Object.entries(campos)
    .filter(([, valor]) => valor === null)
    .map(([nome]) => nome);

  if (emFalta.length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: 'Há campos obrigatórios por preencher ou com formato inválido.',
        // Apenas os nomes dos campos — nunca os valores submetidos.
        fields: emFalta,
      },
      { status: 422, headers: CABECALHOS_SEM_CACHE }
    );
  }

  // Campos opcionais: validados quando presentes, ignorados quando ausentes.
  if (b.municipality !== undefined && normalizarTexto(b.municipality, 80) === null) {
    return NextResponse.json(
      { success: false, message: 'Município inválido.', fields: ['municipality'] },
      { status: 422, headers: CABECALHOS_SEM_CACHE }
    );
  }
  if (b.academicLevel !== undefined && validarEnumeracao(b.academicLevel, NIVEIS_ACADEMICOS) === null) {
    return NextResponse.json(
      { success: false, message: 'Nível académico inválido.', fields: ['academicLevel'] },
      { status: 422, headers: CABECALHOS_SEM_CACHE }
    );
  }
  if (b.motivation !== undefined && normalizarTexto(b.motivation, 2000) === null) {
    return NextResponse.json(
      { success: false, message: 'Motivação demasiado extensa.', fields: ['motivation'] },
      { status: 422, headers: CABECALHOS_SEM_CACHE }
    );
  }

  // O consentimento é condição de tratamento: verificado no servidor.
  if (b.agreeDataProtection !== true) {
    return NextResponse.json(
      {
        success: false,
        message: 'É necessário consentir o tratamento dos dados para submeter a candidatura.',
        fields: ['agreeDataProtection'],
      },
      { status: 422, headers: CABECALHOS_SEM_CACHE }
    );
  }

  // Código de acompanhamento com aleatoriedade criptográfica (Math.random é previsível).
  const ano = new Date().getUTCFullYear();
  const trackingCode = `MUK-CAND-${ano}-${randomInt(0, 1_000_000).toString().padStart(6, '0')}`;

  return NextResponse.json(
    {
      success: true,
      trackingCode,
      message: 'Candidatura recebida. Guarde o código de acompanhamento.',
      timestamp: new Date().toISOString(),
    },
    { headers: CABECALHOS_SEM_CACHE }
  );
}

/** Qualquer outro método é explicitamente recusado. */
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Método não permitido.' },
    { status: 405, headers: { ...CABECALHOS_SEM_CACHE, Allow: 'POST' } }
  );
}
