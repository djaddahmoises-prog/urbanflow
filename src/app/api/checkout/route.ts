import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICE_MAP: Record<string, string | undefined> = {
  pro:    process.env.STRIPE_PRICE_PRO,
  broker: process.env.STRIPE_PRICE_BROKER,
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 })
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: '2026-04-22.dahlia' })
    const { plan } = await req.json() as { plan: string }
    const priceId = PRICE_MAP[plan]

    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/dashboard?checkout=success`,
      cancel_url:  `${appUrl}/pricing?checkout=cancelled`,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
