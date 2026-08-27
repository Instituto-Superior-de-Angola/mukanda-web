import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, phone, biNumber, role, province } = body;

    if (!fullName || !email || !phone || !biNumber || !role || !province) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios não preenchidos.' },
        { status: 400 }
      );
    }

    // Generate unique tracking code: MUK-CAND-YYYY-XXXX
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `MUK-CAND-2026-${randomSuffix}`;

    // Return success response with metadata
    return NextResponse.json({
      success: true,
      trackingCode,
      message: 'Candidatura submetida com sucesso.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erro interno ao processar candidatura.' },
      { status: 500 }
    );
  }
}
