import { MapPin, BarChart3, Users, CreditCard, Bell, Search, Building2, Globe } from 'lucide-react'
import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'

const features = [
  {
    icon: MapPin,
    title: 'Mapas interactivos',
    desc: 'Explora propiedades con Mapbox. Filtra por zona, precio y tipo de inmueble en tiempo real.',
    color: 'bg-brand-100 text-brand-600',
  },
  {
    icon: BarChart3,
    title: 'Estudios de mercado',
    desc: 'Datos actualizados de precios por m², tendencias y comparativas por colonia y delegación.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'Red de brokers',
    desc: 'Conecta con brokers certificados y verificados. Agenda, negocia y cierra desde la plataforma.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: CreditCard,
    title: 'Pagos seguros',
    desc: 'Integración con Stripe para pagos, suscripciones y depósitos. PCI-DSS compliant.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: Bell,
    title: 'Alertas personalizadas',
    desc: 'Notificaciones cuando una propiedad que cumple tus criterios sea publicada o cambie de precio.',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Building2,
    title: 'Listado avanzado',
    desc: 'Publica propiedades residenciales, comerciales, terrenos y locales con datos completos.',
    color: 'bg-sky-100 text-sky-600',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <FadeInView className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Todo lo que necesitas para el mercado inmobiliario
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Desde el estudio de mercado hasta el cierre de la operación, UrbanFlow lo tiene.
          </p>
        </FadeInView>

        <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <StaggerItem key={title}>
              <div className="group h-full flex flex-col gap-4 p-6 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1.5 group-hover:text-brand-700 transition-colors">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
