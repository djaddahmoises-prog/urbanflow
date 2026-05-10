'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, TrendingUp, Shield, Building2, BarChart3, Users } from 'lucide-react'
import { FadeInView } from '@/components/animations/motion'

const badges = [
  { icon: Shield,     label: 'Pagos seguros Stripe' },
  { icon: MapPin,     label: 'Mapas en tiempo real' },
  { icon: TrendingUp, label: 'Datos de mercado' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 bg-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #E5E7EB 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }}
      />

      {/* Orange glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse, rgb(226 85 0 / 0.07) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-8">

        <FadeInView delay={0.05}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border uppercase tracking-wider"
            style={{ background: '#fff7f3', borderColor: '#E25500', color: '#E25500' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E25500' }} aria-hidden="true" />
            Plataforma inmobiliaria #1 en México
          </div>
        </FadeInView>

        <FadeInView delay={0.15}>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
            style={{ color: '#0D1117' }}
          >
            El mercado de{' '}
            <span style={{ color: '#E25500' }}>bienes raíces</span>
            <br />más inteligente
          </h1>
        </FadeInView>

        <FadeInView delay={0.25}>
          <p className="max-w-2xl text-lg sm:text-xl leading-relaxed" style={{ color: '#6b7280' }}>
            Compra y vende metros cuadrados, accede a estudios de mercado en tiempo real,
            conecta con brokers certificados y gestiona todo desde un solo lugar.
          </p>
        </FadeInView>

        <FadeInView delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: '#E25500' }}
            >
              Empezar gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 transition-all hover:-translate-y-0.5"
              style={{ borderColor: '#1E293B', color: '#1E293B' }}
            >
              Ver propiedades
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <Icon className="w-4 h-4" style={{ color: '#E25500' }} aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Dashboard preview */}
        <FadeInView delay={0.5} className="w-full max-w-4xl mt-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl border"
            style={{ borderColor: '#E5E7EB' }}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Browser chrome */}
            <div className="h-10 flex items-center px-4 gap-2" style={{ background: '#0D1117', borderBottom: '1px solid #1E293B' }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} aria-hidden="true" />
              ))}
              <div className="ml-4 flex-1 max-w-xs h-5 rounded-md flex items-center px-3" style={{ background: '#1E293B' }}>
                <span className="text-xs font-mono" style={{ color: '#6b7280' }}>app.urbanflowai.net</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-3 gap-4" style={{ background: '#f9fafb' }}>
              {/* Stat cards */}
              {[
                { icon: Building2, label: 'Propiedades', value: '12,400+', sub: '+4.2% este mes', color: '#E25500' },
                { icon: Users,     label: 'Brokers',     value: '3,200+',  sub: 'Verificados',    color: '#3D5A8C' },
                { icon: BarChart3, label: 'Transacciones', value: '$850M+', sub: 'MXN en 2025',  color: '#0D1117' },
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl p-4 border shadow-sm text-left" style={{ borderColor: '#E5E7EB' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: card.color + '15' }}>
                      <card.icon className="w-4 h-4" style={{ color: card.color }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#6b7280' }}>{card.label}</span>
                  </div>
                  <p className="text-xl font-extrabold" style={{ color: '#0D1117' }}>{card.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: card.color }}>{card.sub}</p>
                </div>
              ))}

              {/* Map preview */}
              <div
                className="col-span-3 rounded-xl overflow-hidden border relative"
                style={{ height: 160, background: 'linear-gradient(135deg, #1E293B 0%, #0D1117 100%)', borderColor: '#E5E7EB' }}
              >
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  {[
                    { label: 'Polanco',   price: '$5,200/m²', trend: '+2.8%' },
                    { label: 'Santa Fe',  price: '$3,640/m²', trend: '+6.1%' },
                    { label: 'Condesa',   price: '$4,100/m²', trend: '+3.4%' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl px-4 py-2 text-left" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
                      <p className="text-sm font-bold text-white">{item.price}</p>
                      <p className="text-xs font-semibold" style={{ color: '#E25500' }}>{item.trend}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md" style={{ background: '#E25500', color: 'white' }}>
                  Mapa en vivo
                </div>
              </div>
            </div>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  )
}
