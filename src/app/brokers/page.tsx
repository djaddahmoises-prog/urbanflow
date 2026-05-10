import type { Metadata } from 'next'
import Link from 'next/link'
import { BadgeCheck, TrendingUp, Users, Star, ArrowRight, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brokers — UrbanFlow AI',
  description: 'Red de brokers inmobiliarios certificados en México. Conecta con expertos en bienes raíces, inversiones y renta de propiedades.',
}

const benefits = [
  { icon: Users,    title: 'Miles de compradores',   desc: 'Accede a una red activa de compradores, inversores y arrendatarios en toda la República.' },
  { icon: TrendingUp, title: 'Más cierres',           desc: 'Herramientas CRM, seguimiento de leads y análisis de mercado para cerrar más operaciones.' },
  { icon: BadgeCheck, title: 'Verificación oficial', desc: 'Obtén el sello "Broker Verificado" que genera confianza y diferencia tu perfil.' },
  { icon: Star,     title: 'Perfil destacado',       desc: 'Tu perfil, propiedades y reseñas visibles en búsquedas y en el mapa interactivo.' },
]

const steps = [
  { num: '01', title: 'Regístrate', desc: 'Crea tu cuenta y selecciona el plan Broker Pro.' },
  { num: '02', title: 'Verifica tu identidad', desc: 'Sube tu cédula o registro AMPI para obtener el sello verificado.' },
  { num: '03', title: 'Publica propiedades', desc: 'Agrega propiedades ilimitadas con fotos, ubicación y ficha técnica.' },
  { num: '04', title: 'Cierra operaciones', desc: 'Gestiona clientes, citas y contratos desde tu panel de broker.' },
]

const mockBrokers = [
  { name: 'Carlos Mendoza', city: 'CDMX · Polanco', ops: 48, rating: 4.9, spec: 'Residencial de lujo' },
  { name: 'Laura Sánchez',  city: 'Guadalajara · Zapopan', ops: 31, rating: 4.8, spec: 'Inversión comercial' },
  { name: 'Roberto Ávila',  city: 'Monterrey · San Pedro', ops: 57, rating: 5.0, spec: 'Desarrollo inmobiliario' },
  { name: 'María Torres',   city: 'CDMX · Santa Fe', ops: 22, rating: 4.7, spec: 'Renta corporativa' },
  { name: 'Diego Herrera',  city: 'Cancún · Hotel Zone', ops: 39, rating: 4.9, spec: 'Turístico e inversión' },
  { name: 'Sofía López',    city: 'CDMX · Condesa', ops: 28, rating: 4.8, spec: 'Propiedades boutique' },
]

export default function BrokersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative py-24 px-4 sm:px-6 overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #0c1a2e 0%, #1a3f9e 60%, #0c1a2e 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/20 mb-6">
            <BadgeCheck className="w-3.5 h-3.5 text-accent-400" aria-hidden="true" />
            Red de brokers certificados
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Crece tu negocio inmobiliario con{' '}
            <span style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundImage: 'linear-gradient(90deg, #ffa066, #e8650a)' }}>
              UrbanFlow
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Únete a la red de brokers más grande de México. Conecta con compradores calificados, cierra más operaciones y haz crecer tu cartera.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register?plan=broker"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #e8650a, #f87333)' }}
            >
              Unirme como broker
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/10 transition-colors font-medium"
            >
              Hablar con ventas
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6" aria-labelledby="benefits-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4">
              ¿Por qué unirte a nuestra red?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-brand-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-neutral-900 text-sm">{title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 sm:px-6 bg-neutral-50" aria-labelledby="steps-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="steps-heading" className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4">
              Cómo funciona
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc }) => (
              <div key={num} className="flex flex-col gap-3">
                <span className="text-4xl font-extrabold text-brand-200">{num}</span>
                <h3 className="font-bold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured brokers */}
      <section className="py-20 px-4 sm:px-6" aria-labelledby="brokers-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 id="brokers-heading" className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-4">
              Brokers destacados
            </h2>
            <p className="text-neutral-500">Conoce a algunos de nuestros brokers verificados.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBrokers.map((broker) => (
              <div key={broker.name} className="flex flex-col gap-4 p-6 rounded-2xl border border-neutral-200 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-600 text-white font-bold text-sm flex items-center justify-center shrink-0" aria-hidden="true">
                    {broker.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold text-neutral-900 text-sm">{broker.name}</p>
                      <BadgeCheck className="w-3.5 h-3.5 text-brand-500" aria-label="Verificado" />
                    </div>
                    <p className="text-xs text-neutral-500">{broker.city}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
                    {broker.ops} operaciones
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    {broker.rating}
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 font-medium w-fit">
                  {broker.spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 bg-brand-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          <p className="text-brand-200 mb-8">
            Únete hoy y empieza a conectar con miles de compradores e inversores.
          </p>
          <Link
            href="/register?plan=broker"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-white text-brand-700 hover:bg-brand-50 transition-colors"
          >
            Crear cuenta de broker
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}
