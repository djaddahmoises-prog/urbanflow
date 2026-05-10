import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { LISTING_FEES } from '@/types/listing'
import type { ListingPlan } from '@/types/listing'

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 503 })
  }

  try {
    const stripe = new Stripe(secretKey, { apiVersion: '2026-04-22.dahlia' })
    const { plan, listingTitle, draftId } = await req.json() as {
      plan: ListingPlan
      listingTitle: string
      draftId: string
    }

    const fee = LISTING_FEES.find((f) => f.plan === plan)
    if (!fee) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            unit_amount: fee.price * 100,
            product_data: {
              name: `Publicación ${fee.label} — ${listingTitle}`,
              description: `${fee.durationDays} días activo en UrbanFlow`,
            },
          },
          quantity: 1,
        },
      ],
      metadata: { draftId, plan, listingTitle },
      success_url: `${appUrl}/publish/success?draftId=${draftId}&plan=${plan}`,
      cancel_url:  `${appUrl}/publish?step=payment&draftId=${draftId}`,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Internal error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
