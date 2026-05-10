/**
 * Run once to create all UrbanFlow products and prices in your Stripe account.
 * Usage:
 *   node scripts/stripe-setup.js
 *
 * Then copy the printed price IDs into your .env.local
 */

const Stripe = require('stripe')

const SECRET_KEY = process.env.STRIPE_SECRET_KEY
if (!SECRET_KEY) {
  console.error('Set STRIPE_SECRET_KEY environment variable first.')
  process.exit(1)
}

const stripe = new Stripe(SECRET_KEY, { apiVersion: '2026-04-22.dahlia' })

async function main() {
  console.log('\n🚀 UrbanFlow — Stripe setup\n')

  // ── Subscription plans ──────────────────────────────────────
  console.log('Creating subscription products...')

  const proProduct = await stripe.products.create({
    name: 'UrbanFlow Profesional',
    description: 'Estudios de mercado completos, alertas ilimitadas, exportar reportes PDF, datos históricos 5 años.',
  })
  const proPrice = await stripe.prices.create({
    product: proProduct.id,
    unit_amount: 79900,
    currency: 'mxn',
    recurring: { interval: 'month' },
    nickname: 'Profesional mensual',
  })
  console.log(`  ✅ Profesional  →  ${proPrice.id}`)

  const brokerProduct = await stripe.products.create({
    name: 'UrbanFlow Broker',
    description: 'Perfil de broker verificado, hasta 100 propiedades, CRM integrado, comisiones automatizadas, API de datos.',
  })
  const brokerPrice = await stripe.prices.create({
    product: brokerProduct.id,
    unit_amount: 199900,
    currency: 'mxn',
    recurring: { interval: 'month' },
    nickname: 'Broker mensual',
  })
  console.log(`  ✅ Broker       →  ${brokerPrice.id}`)

  // ── Output ──────────────────────────────────────────────────
  console.log('\n─────────────────────────────────────────────')
  console.log('Add these to your .env.local:\n')
  console.log(`STRIPE_PRICE_PRO=${proPrice.id}`)
  console.log(`STRIPE_PRICE_BROKER=${brokerPrice.id}`)
  console.log('─────────────────────────────────────────────\n')
  console.log('Note: Listing fees (Básico/Destacado/Premium) are created dynamically')
  console.log('      per transaction — no price IDs needed for those.\n')
  console.log('✅ Done! Restart your dev server after updating .env.local')
}

main().catch((err) => {
  console.error('Error:', err.message)
  process.exit(1)
})
