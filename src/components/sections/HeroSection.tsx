'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, TrendingUp, Shield } from 'lucide-react'
import { WordSplit, FadeInView } from '@/components/animations/motion'

const badges = [
  { icon: Shield, label: 'Pagos seguros con Stripe' },
  { icon: MapPin, label: 'Mapas en tiempo real' },
  { icon: TrendingUp, label: 'Datos de mercado actualizados' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-50 px-4 sm:px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgb(100 112 243 / 0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #6470f3 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-8">
        <FadeInView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold border border-brand-200">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" aria-hidden="true" />
            Plataforma inmobiliaria #1 en México
          </div>
        </FadeInView>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-neutral-900 leading-[1.05] tracking-tight">
          <WordSplit text="El mercado de bienes raíces más inteligente" />
        </h1>

        <FadeInView delay={0.3}>
          <p className="max-w-2xl text-lg sm:text-xl text-neutral-500 leading-relaxed">
            Compra y vende metros cuadrados, accede a estudios de mercado en tiempo real, conecta con brokers
            certificados y gestiona todo desde un solo lugar.
          </p>
        </FadeInView>

        <FadeInView delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
            >
              Empezar gratis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              Ver propiedades
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.55}>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-neutral-500">
                <Icon className="w-4 h-4 text-brand-500" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.65} className="w-full max-w-2xl mt-6">
          <motion.div
            className="relative rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <div className="bg-neutral-900 h-8 flex items-center px-4 gap-2">
              {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} aria-hidden="true" />
              ))}
              <span className="ml-2 text-xs text-neutral-400 font-mono">urbanflow.mx/properties</span>
            </div>
            <div className="h-56 bg-gradient-to-br from-brand-50 via-neutral-50 to-brand-100 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 px-8">
                {[
                  { label: 'Cdmx Norte', price: '$2,850/m²', trend: '+4.2%' },
                  { label: 'Polanco',    price: '$5,200/m²', trend: '+2.8%' },
                  { label: 'Santa Fe',  price: '$3,640/m²', trend: '+6.1%' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-3 shadow-sm border border-neutral-100 text-left">
                    <p className="text-xs text-neutral-500 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-neutral-900">{item.price}</p>
                    <p className="text-xs text-green-600 font-medium">{item.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
}
