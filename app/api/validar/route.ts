import { NextResponse } from 'next/server';
import {
  CABECALHOS_SEM_CACHE,
  limitarFrequencia,
  mascararBI,
  normalizarTexto,
  origemDoPedido,
} from '@/lib/seguranca/validacao';
import { FORMATO_CODIGO, procurarCertificado } from '@/lib/seguranca/registo-certificados';

export const dynamic = 'force-dynamic';

/**
 * Verificação pública de certificados AngoComp.
 *
 * Serviço de confiança: a resposta afirma a autenticidade de um documento. Por isso a
 * validade nunca é inferida do formato do código — provém exclusivamente do registo
 * (ver lib/seguranca/registo-certificados.ts). O número de BI do titular é sempre
 * mascarado antes de sair.
 */
export async function GET(request: Request) {
  const origem = origemDoPedido(request);
  const limite = limitarFrequencia(`validar:${origem}`, 30, 60_000);
  if (!limite.permitido) {
    return NextResponse.json(
      { valid: false, message: 'Demasiados pedidos. Tente novamente dentro de instantes.' },
      { status: 429, headers: { ...CABECALHOS_SEM_CACHE, 'Retry-After': String(limite.retentarEmSegundos) } }
    );
  }

  const { searchParams } = new URL(request.url);
  const codigo = normalizarTexto(searchParams.get('code'), 32);

  if (!codigo) {
    return NextResponse.json(
      { valid: false, message: 'Código não fornecido.' },
      { status: 400, headers: CABECALHOS_SEM_CACHE }
    );
  }

  const normalizado = codigo.toUpperCase();

  if (!FORMATO_CODIGO.test(normalizado)) {
    return NextResponse.json(
      { valid: false, message: 'Formato de código inválido. Exemplo: MUK-2026-002500.' },
      { status: 400, headers: CABECALHOS_SEM_CACHE }
    );
  }

  const certificado = procurarCertificado(normalizado);

  if (!certificado) {
    return NextResponse.json(
      { valid: false, message: 'Certificado não encontrado no registo.' },
      { status: 404, headers: CABECALHOS_SEM_CACHE }
    );
  }

  return NextResponse.json(
    {
      valid: true,
      demo: true,
      code: certificado.code,
      recipient: certificado.recipient,
      biNumber: mascararBI(certificado.biNumber),
      level: certificado.level,
      province: certificado.province,
      issueDate: certificado.issueDate,
      issuer: certificado.issuer,
      notice:
        'Registo de demonstração. O registo definitivo de certificados entra em vigor com a certificação do WP4.',
    },
    { headers: CABECALHOS_SEM_CACHE }
  );
}
