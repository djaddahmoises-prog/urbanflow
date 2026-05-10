import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/motion'

export default function CtaSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-brand-950" aria-labelledby="cta-heading">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInView>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            ¿Listo para entrar al mercado inmobiliario del futuro?
          </h2>
          <p className="text-brand-300 text-lg mb-10">
            Únete a miles de inversionistas, brokers y compradores que ya usan UrbanFlow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-white text-brand-700 hover:bg-brand-50 transition-colors"
            >
              Crear cuenta gratis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl text-brand-300 hover:text-white hover:bg-brand-900 transition-colors"
            >
              Hablar con ventas
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
