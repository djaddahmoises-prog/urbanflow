import { BarChart3, Heart, Bell, Settings, TrendingUp, MapPin } from 'lucide-react'
import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'
import Card from '@/components/ui/Card'
import Link from 'next/link'

const quickLinks = [
  { icon: MapPin,    label: 'Mis propiedades',  href: '/properties',   desc: '5 guardadas' },
  { icon: Heart,     label: 'Favoritos',         href: '/dashboard/favorites', desc: '3 propiedades' },
  { icon: Bell,      label: 'Mis alertas',       href: '/dashboard/alerts',    desc: '2 activas' },
  { icon: BarChart3, label: 'Reportes',          href: '/dashboard/reports',   desc: 'Ver análisis' },
  { icon: TrendingUp,label: 'Mercado',           href: '/market',              desc: 'Datos en vivo' },
  { icon: Settings,  label: 'Configuración',     href: '/dashboard/settings',  desc: 'Tu cuenta' },
]

const activity = [
  { text: 'Nueva propiedad en Polanco coincide con tu alerta', time: 'hace 2h' },
  { text: 'El precio de tu propiedad guardada bajó 3%',        time: 'hace 1d' },
  { text: 'Carlos Herrera confirmó tu cita para mañana',       time: 'hace 2d' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <FadeInView>
          <h1 className="text-2xl font-extrabold text-neutral-900">Buenos días, Moises</h1>
          <p className="text-neutral-500 mt-1">Aquí está tu resumen de hoy.</p>
        </FadeInView>

        {/* KPIs */}
        <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Propiedades vistas', value: '142' },
            { label: 'Alertas activas',    value: '2' },
            { label: 'Favoritos',          value: '3' },
            { label: 'Citas agendadas',    value: '1' },
          ].map(({ label, value }) => (
            <StaggerItem key={label}>
              <Card className="text-center">
                <p className="text-3xl font-extrabold text-brand-600">{value}</p>
                <p className="text-xs text-neutral-500 mt-1">{label}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>

        {/* Quick links */}
        <div>
          <FadeInView>
            <h2 className="text-lg font-bold text-neutral-900 mb-4">Accesos rápidos</h2>
          </FadeInView>
          <StaggerList className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {quickLinks.map(({ icon: Icon, label, href, desc }) => (
              <StaggerItem key={href}>
                <Link href={href} aria-label={label}>
                  <Card interactive className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{label}</p>
                      <p className="text-xs text-neutral-500">{desc}</p>
                    </div>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>

        {/* Activity feed */}
        <div>
          <FadeInView>
            <h2 className="text-lg font-bold text-neutral-900 mb-4">Actividad reciente</h2>
          </FadeInView>
          <Card>
            <ul className="divide-y divide-neutral-100" role="list">
              {activity.map(({ text, time }) => (
                <li key={text} className="py-3 flex items-start justify-between gap-4">
                  <p className="text-sm text-neutral-700">{text}</p>
                  <span className="text-xs text-neutral-400 shrink-0">{time}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
