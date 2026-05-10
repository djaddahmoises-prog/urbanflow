import Link from 'next/link'
import { MapPin } from 'lucide-react'

const columns = [
  {
    title: 'Producto',
    links: [
      { label: 'Propiedades', href: '/properties' },
      { label: 'Precios', href: '/pricing' },
      { label: 'Brokers', href: '/brokers' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '/about' },
      { label: 'Contacto', href: '/contact' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-white mb-4"
              aria-label="UrbanFlow — inicio"
            >
              <span className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
              </span>
              UrbanFlow
            </Link>
            <p className="text-sm leading-relaxed">
              El mercado inmobiliario más avanzado de México. Compra, vende y estudia el mercado.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} UrbanFlow. Todos los derechos reservados.</p>
          <p>Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  )
}
