'use client'

import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
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
      'Perfil de usuario',
    ],
    cta: 'Empezar gratis',
    href: '/register',
    external: false,
    highlight: false,
    accent: false,
  },
  {
    name: 'Profesional',
    price: '$499',
    period: '/mes MXN',
    desc: 'Para compradores e inversores que necesitan datos reales.',
    features: [
      'Todo lo del plan Explorador',
      'Estudios de mercado completos',
      'Alertas ilimitadas',
      'Exportar reportes PDF',
      'Datos históricos 5 años',
      'Soporte por email',
    ],
    cta: 'Suscribirse',
    href: '/register?plan=pro',
    external: false,
    highlight: true,
    accent: false,
  },
  {
    name: 'Inversor',
    price: '$1,499',
    period: '/mes MXN',
    desc: 'Para inversores activos con portafolios en crecimiento.',
    features: [
      'Todo lo del plan Profesional',
      'Análisis de ROI avanzado',
      'Comparador de zonas',
      'Acceso a brokers certificados',
      'Proyecciones de plusvalía',
      'Soporte prioritario',
    ],
    cta: 'Suscribirse',
    href: '/register?plan=inversor',
    external: false,
    highlight: false,
    accent: false,
  },
  {
    name: 'Broker Pro',
    price: '$2,999',
    period: '/mes MXN',
    desc: 'Para brokers y agencias con múltiples propiedades.',
    features: [
      'Todo lo del plan Inversor',
      'Perfil de broker verificado',
      'Propiedades ilimitadas',
      'CRM de clientes integrado',
      'Comisiones automatizadas',
      'API de datos + Webhook',
      'Gerente de cuenta dedicado',
    ],
    cta: 'Contactar ventas',
    href: '/contact',
    external: false,
    highlight: false,
    accent: true,
  },
]

export default function PricingSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-neutral-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto">
        <FadeInView className="text-center mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Planes para cada necesidad
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </FadeInView>

        <StaggerList className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                className={cn(
                  'relative rounded-2xl border p-7 flex flex-col gap-5 h-full',
                  plan.highlight
                    ? 'bg-brand-600 border-brand-600 text-white shadow-2xl shadow-brand-900/30 ring-2 ring-brand-500'
                    : plan.accent
                    ? 'bg-brand-950 border-brand-900 text-white shadow-xl'
                    : 'bg-white border-neutral-200 shadow-sm'
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-bold shadow-md whitespace-nowrap">
                    <Zap className="w-3 h-3" aria-hidden="true" />
                    Más popular
                  </div>
                )}

                <div>
                  <h3 className={cn('font-bold text-base mb-1', plan.highlight || plan.accent ? 'text-white' : 'text-neutral-900')}>
                    {plan.name}
                  </h3>
                  <p className={cn('text-xs leading-relaxed', plan.highlight ? 'text-brand-200' : plan.accent ? 'text-neutral-400' : 'text-neutral-500')}>
                    {plan.desc}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className={cn('text-3xl font-extrabold', plan.highlight || plan.accent ? 'text-white' : 'text-neutral-900')}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={cn('text-xs', plan.highlight ? 'text-brand-200' : plan.accent ? 'text-neutral-400' : 'text-neutral-500')}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-2.5 flex-1" role="list">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs">
                      <Check
                        className={cn('w-3.5 h-3.5 mt-0.5 shrink-0',
                          plan.highlight ? 'text-accent-300'
                          : plan.accent   ? 'text-brand-400'
                          : 'text-brand-500'
                        )}
                        aria-hidden="true"
                      />
                      <span className={plan.highlight ? 'text-brand-100' : plan.accent ? 'text-neutral-300' : 'text-neutral-600'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={cn(
                    'w-full inline-flex items-center justify-center py-2.5 rounded-xl font-semibold text-sm transition-colors mt-1',
                    plan.highlight
                      ? 'bg-white text-brand-600 hover:bg-brand-50'
                      : plan.accent
                      ? 'bg-brand-600 text-white hover:bg-brand-500'
                      : 'bg-brand-600 text-white hover:bg-brand-700'
                  )}
                >
                  {plan.cta}
                </Link>
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
