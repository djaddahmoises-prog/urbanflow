import { MapPin, BarChart3, Users, CreditCard, Bell, Search } from 'lucide-react'
import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: MapPin,
    title: 'Mapas interactivos',
    desc: 'Explora propiedades en mapas de alta precisión con Mapbox. Filtra por zona, precio y tipo de inmueble.',
  },
  {
    icon: BarChart3,
    title: 'Estudios de mercado',
    desc: 'Datos actualizados de precios por metro cuadrado, tendencias y comparativas por colonia y delegación.',
  },
  {
    icon: Users,
    title: 'Red de brokers',
    desc: 'Conecta con brokers certificados y verificados. Agenda citas, negocia y cierra desde la plataforma.',
  },
  {
    icon: CreditCard,
    title: 'Pagos seguros',
    desc: 'Integración con Stripe para pagos, suscripciones y depósitos. Todo encriptado y cumpliendo PCI-DSS.',
  },
  {
    icon: Bell,
    title: 'Alertas personalizadas',
    desc: 'Recibe notificaciones cuando una propiedad que cumple tus criterios sea publicada o cambie de precio.',
  },
  {
    icon: Search,
    title: 'Búsqueda avanzada',
    desc: 'Filtra por metros cuadrados, precio, zona, tipo de uso (residencial, comercial, terreno) y más.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-neutral-50" aria-labelledby="features-heading">
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
          {features.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <Card interactive className="h-full flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
