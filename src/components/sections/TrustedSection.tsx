import { BadgeCheck } from 'lucide-react'

const companies = [
  { initials: 'FU', name: 'Fibra Uno',      sub: 'FUNO11 · BMV' },
  { initials: 'FD', name: 'Fibra Danhos',   sub: 'DANHOS13 · BMV' },
  { initials: 'CL', name: 'COLD Logística', sub: 'Industrial' },
  { initials: 'AV', name: 'Acosta Verde',   sub: 'Centros Comerciales' },
  { initials: 'GA', name: 'Grupo Ánima',    sub: 'Desarrollo Inmobiliario' },
]

export default function TrustedSection() {
  return (
    <section className="py-16 px-4 sm:px-6 border-y" style={{ background: '#f9fafb', borderColor: '#E5E7EB' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest mb-10" style={{ color: '#9ca3af' }}>
          Empresas que confían en UrbanFlow AI
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {companies.map((c) => (
            <div key={c.name} className="flex items-center gap-3 px-5 py-3 rounded-xl border bg-white shadow-sm" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-extrabold text-white shrink-0" style={{ background: '#0D1117' }}>
                {c.initials}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-sm font-bold" style={{ color: '#0D1117' }}>{c.name}</p>
                  <BadgeCheck className="w-3.5 h-3.5" style={{ color: '#E25500' }} aria-label="Verificado" />
                </div>
                <p className="text-xs" style={{ color: '#9ca3af' }}>{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
