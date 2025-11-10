import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // URL do Google Apps Script (você vai configurar depois)
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || ''

    if (!GOOGLE_SCRIPT_URL) {
      // Se não tiver configurado, apenas loga no console
      console.log('Dados recebidos:', data)
      return NextResponse.json({ success: true, message: 'Dados recebidos (Google Sheets não configurado)' })
    }

    // Enviar para Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Erro ao enviar para Google Sheets')
    }

    return NextResponse.json({ success: true, message: 'Dados salvos com sucesso!' })
  } catch (error) {
    console.error('Erro:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar dados' },
      { status: 500 }
    )
  }
}
