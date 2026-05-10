import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, topic, message } = await req.json() as {
      name: string; email: string; topic: string; message: string
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
    }

    // If a Resend / SMTP key is configured, send the email
    // Log to console (add RESEND_API_KEY env var + install resend package to send emails)
    console.info('[contact form]', { name, email, topic, message })

    return NextResponse.json({ ok: true })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
