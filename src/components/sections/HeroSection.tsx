'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, TrendingUp, Shield, Building2, Star } from 'lucide-react'
import { FadeInView } from '@/components/animations/motion'

const badges = [
  { icon: Shield,    label: 'Pagos seguros Stripe' },
  { icon: MapPin,    label: 'Mapas en tiempo real' },
  { icon: TrendingUp, label: 'Datos actualizados' },
]

const floatingCards = [
  { label: 'Polanco',   price: '$5,200/m²', trend: '+2.8%', pos: 'top-12 left-8' },
  { label: 'Santa Fe',  price: '$3,640/m²', trend: '+6.1%', pos: 'top-4 right-12' },
  { label: 'Condesa',   price: '$4,100/m²', trend: '+3.4%', pos: 'bottom-16 right-4' },
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
      style={{ background: 'linear-gradient(155deg, #0c1a2e 0%, #1a3f9e 50%, #0c1a2e 100%)' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgb(26 63 158 / 0.5) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgb(232 101 10 / 0.15) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center gap-8">
        <FadeInView delay={0.05}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" aria-hidden="true" />
            Plataforma inmobiliaria #1 en México
          </div>
        </FadeInView>

        <FadeInView delay={0.15}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            El mercado de{' '}
            <span
              className="relative inline-block"
              style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(90deg, #ffa066, #e8650a)' }}
            >
              bienes raíces
            </span>
            <br />más inteligente
          </h1>
        </FadeInView>

        <FadeInView delay={0.25}>
          <p className="max-w-2xl text-lg sm:text-xl text-white/60 leading-relaxed">
            Compra y vende metros cuadrados, accede a estudios de mercado en tiempo real,
            conecta con brokers certificados y gestiona todo desde un solo lugar.
          </p>
        </FadeInView>

        <FadeInView delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #e8650a, #f87333)' }}
            >
              Empezar gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Ver propiedades
            </Link>
          </div>
        </FadeInView>

        <FadeInView delay={0.45}>
          <div className="flex flex-wrap justify-center gap-6 mt-2">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/50">
                <Icon className="w-4 h-4 text-accent-400" aria-hidden="true" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Mock dashboard preview */}
        <FadeInView delay={0.55} className="w-full max-w-3xl mt-4">
          <motion.div
            className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Window chrome */}
            <div className="bg-black/40 h-9 flex items-center px-4 gap-2 border-b border-white/10">
              {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} aria-hidden="true" />
              ))}
              <span className="ml-3 text-xs text-white/30 font-mono">app.urbanflow.mx/properties</span>
            </div>

            <div className="relative h-72 bg-gradient-to-br from-brand-950 via-brand-900/60 to-brand-950 flex items-center justify-center p-6">
              {/* Floating stat cards */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                {[
                  { label: 'Cdmx Norte', price: '$2,850/m²', trend: '+4.2%', icon: Building2 },
                  { label: 'Polanco',    price: '$5,200/m²', trend: '+2.8%', icon: Star },
                  { label: 'Santa Fe',  price: '$3,640/m²', trend: '+6.1%', icon: TrendingUp },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-left"
                  >
                    <p className="text-xs text-white/50 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-white">{item.price}</p>
                    <p className="text-xs text-accent-400 font-semibold">{item.trend}</p>
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
