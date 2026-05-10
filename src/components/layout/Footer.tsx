import Link from 'next/link'
import { LogoFull } from '@/components/ui/Logo'

const columns = [
  {
    title: 'Producto',
    links: [
      { label: 'Propiedades', href: '/properties' },
      { label: 'Mercado',     href: '/market' },
      { label: 'Publicar',    href: '/publish' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Brokers',  href: '/brokers' },
      { label: 'Precios',  href: '/pricing' },
      { label: 'Contacto', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos',   href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" aria-label="UrbanFlow AI — inicio">
              <LogoFull size={28} className="text-white" />
            </Link>
            <p className="text-sm leading-relaxed">
              El mercado inmobiliario más avanzado de México. Compra, vende e invierte con datos reales.
            </p>
            <p className="text-xs text-neutral-600">Ciudad de México, México</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} UrbanFlow AI. Todos los derechos reservados.</p>
          <p className="text-neutral-600">Hecho con ❤️ en México</p>
        </div>
      </div>
    </footer>
  )
}
