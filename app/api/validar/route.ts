import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ valid: false, message: 'Código não fornecido' }, { status: 400 });
  }

  const clean = code.trim().toUpperCase();

  if (clean.startsWith('MUK-')) {
    return NextResponse.json({
      valid: true,
      code: clean,
      recipient: 'Cidadão Certificado(a) Oficial',
      province: 'Luanda / Huíla / Uíge',
      level: 'Nível Intermédio B2 (Quadro AngoComp)',
      issueDate: '2026',
      issuer: 'ACITE (Instituto Superior de Angola)'
    });
  }

  return NextResponse.json({ valid: false, message: 'Certificado não encontrado' }, { status: 404 });
}
