import { FadeInView } from '@/components/animations/motion'
import { BadgeCheck } from 'lucide-react'

const companies = [
  { name: 'Fibra Uno',         sub: 'FUNO11 · BMV',           initials: 'FU' },
  { name: 'Fibra Danhos',      sub: 'DANHOS13 · BMV',         initials: 'FD' },
  { name: 'COLD Logística',    sub: 'Industrial & Cold Chain', initials: 'CL' },
  { name: 'Grupo Acosta Verde',sub: 'Centros Comerciales',     initials: 'AV' },
  { name: 'Grupo Ánima',       sub: 'Desarrollo Inmobiliario', initials: 'GA' },
]

export default function TrustedSection() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white border-y border-neutral-100" aria-label="Empresas de confianza">
      <div className="max-w-5xl mx-auto">
        <FadeInView className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">
            Empresas que confían en UrbanFlow AI
          </p>
        </FadeInView>

        <FadeInView>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-brand-200 hover:bg-brand-50 transition-colors"
              >
                <span className="w-9 h-9 rounded-xl bg-brand-950 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {c.initials}
                </span>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-semibold text-neutral-900 leading-none">{c.name}</p>
                    <BadgeCheck className="w-3.5 h-3.5 text-brand-500 shrink-0" aria-label="Verificado" />
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
