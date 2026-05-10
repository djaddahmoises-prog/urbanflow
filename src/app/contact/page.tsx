import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto — UrbanFlow AI',
  description: 'Contáctanos para soporte, ventas o cualquier pregunta sobre UrbanFlow AI, la plataforma inmobiliaria más avanzada de México.',
}

const contactInfo = [
  { icon: Mail,  label: 'Email',     value: 'hola@urbanflowai.net',     href: 'mailto:hola@urbanflowai.net' },
  { icon: Phone, label: 'Teléfono',  value: '+52 55 1234 5678',         href: 'tel:+525512345678' },
  { icon: MapPin, label: 'Oficina',  value: 'Ciudad de México, México', href: null },
  { icon: Clock, label: 'Horario',   value: 'Lun–Vie, 9:00–18:00 CST', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-4 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">Contáctanos</h1>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            Estamos aquí para ayudarte. Ya sea soporte técnico, ventas o información general.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info panel */}
          <aside className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-brand-950 rounded-2xl p-7 text-white flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-bold mb-1">UrbanFlow AI</h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  La plataforma inmobiliaria más avanzada de México. Conectamos compradores, vendedores, inversores y brokers.
                </p>
              </div>

              <ul className="flex flex-col gap-4" role="list">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-accent-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white hover:text-accent-300 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-white">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-white/40 mb-3">Síguenos</p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Instagram', 'Twitter'].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-lg bg-white/10 text-xs text-white/60 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-accent-50 border border-accent-200 rounded-2xl p-6">
              <h3 className="font-semibold text-accent-800 mb-2 text-sm">¿Eres broker?</h3>
              <p className="text-xs text-accent-700 leading-relaxed mb-4">
                Únete a nuestra red de brokers certificados y llega a miles de compradores e inversores.
              </p>
              <a
                href="/brokers"
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
              >
                Ver programa de brokers →
              </a>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
