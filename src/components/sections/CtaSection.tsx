import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6" style={{ background: '#E25500' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
          ¿Listo para encontrar tu próxima inversión?
        </h2>
        <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Únete a miles de compradores, inversores y brokers que ya usan UrbanFlow AI.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/register"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5 shadow-lg"
            style={{ background: '#0D1117', color: 'white' }}
          >
            Crear cuenta gratis
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#E25500] transition-all hover:-translate-y-0.5"
          >
            Ver propiedades
          </Link>
        </div>
      </div>
    </section>
  )
}
