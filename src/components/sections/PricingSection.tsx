'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Explorador',
    price: 'Gratis',
    period: '',
    desc: 'Para conocer la plataforma y hacer búsquedas básicas.',
    features: [
      'Búsqueda de propiedades',
      'Vista de mapa básica',
      '5 alertas por mes',
      'Acceso a brokers verificados',
    ],
    cta: 'Empezar gratis',
    href: '/register',
    external: false,
    highlight: false,
  },
  {
    name: 'Profesional',
    price: '$799',
    period: '/mes',
    desc: 'Para inversores y compradores activos que necesitan datos avanzados.',
    features: [
      'Todo lo del plan Explorador',
      'Estudios de mercado completos',
      'Alertas ilimitadas',
      'Exportar reportes PDF',
      'Soporte prioritario',
      'Datos históricos 5 años',
    ],
    cta: 'Suscribirse',
    href: process.env.NEXT_PUBLIC_STRIPE_LINK_PRO ?? '/register?plan=pro',
    external: true,
    highlight: true,
  },
  {
    name: 'Broker',
    price: '$1,999',
    period: '/mes',
    desc: 'Para brokers y agencias que gestionan múltiples propiedades.',
    features: [
      'Todo lo del plan Profesional',
      'Perfil de broker verificado',
      'Hasta 100 propiedades listadas',
      'CRM de clientes integrado',
      'Comisiones automatizadas',
      'API de datos',
    ],
    cta: 'Suscribirse',
    href: process.env.NEXT_PUBLIC_STRIPE_LINK_BROKER ?? '/register?plan=broker',
    external: true,
    highlight: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-neutral-50" aria-labelledby="pricing-heading">
      <div className="max-w-6xl mx-auto">
        <FadeInView className="text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </FadeInView>

        <StaggerList className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={cn(
                  'relative rounded-2xl border p-8 flex flex-col gap-6 h-full',
                  plan.highlight
                    ? 'bg-brand-600 border-brand-600 text-white shadow-xl'
                    : 'bg-white border-neutral-200 shadow-sm'
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-brand-600 text-xs font-bold shadow-md whitespace-nowrap">
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className={cn('font-bold text-lg mb-1', plan.highlight ? 'text-white' : 'text-neutral-900')}>
                    {plan.name}
                  </h3>
                  <p className={cn('text-sm', plan.highlight ? 'text-brand-200' : 'text-neutral-500')}>
                    {plan.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={cn('text-4xl font-extrabold', plan.highlight ? 'text-white' : 'text-neutral-900')}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={cn('text-sm', plan.highlight ? 'text-brand-200' : 'text-neutral-500')}>
                      {plan.period} MXN
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3 flex-1" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={cn('w-4 h-4 mt-0.5 shrink-0', plan.highlight ? 'text-brand-200' : 'text-brand-500')}
                        aria-hidden="true"
                      />
                      <span className={plan.highlight ? 'text-brand-100' : 'text-neutral-600'}>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.external ? (
                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-colors',
                      plan.highlight
                        ? 'bg-white text-brand-600 hover:bg-brand-50'
                        : 'bg-brand-600 text-white hover:bg-brand-700'
                    )}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.href}
                    className={cn(
                      'w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-colors',
                      plan.highlight
                        ? 'bg-white text-brand-600 hover:bg-brand-50'
                        : 'bg-brand-600 text-white hover:bg-brand-700'
                    )}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        <FadeInView className="text-center mt-10 text-sm text-neutral-500">
          Pago seguro procesado por{' '}
          <span className="font-semibold text-neutral-700">Stripe</span>.
          Cancela en cualquier momento desde tu panel.
        </FadeInView>
      </div>
    </section>
  )
}
