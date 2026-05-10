import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'
import Card from '@/components/ui/Card'

const testimonials = [
  {
    name: 'Andrea Martínez',
    role: 'Inversionista, CDMX',
    avatar: 'AM',
    quote:
      'Gracias a UrbanFlow pude identificar zonas con alta apreciación antes que nadie. Cerré 3 operaciones en un mes.',
  },
  {
    name: 'Carlos Herrera',
    role: 'Broker independiente',
    avatar: 'CH',
    quote:
      'El perfil de broker verificado me dio la credibilidad que necesitaba. Mis cierres aumentaron 40% en dos meses.',
  },
  {
    name: 'Sofía Ramírez',
    role: 'Compradora de primera vivienda',
    avatar: 'SR',
    quote:
      'Nunca entendí el mercado inmobiliario hasta que usé UrbanFlow. Los estudios de mercado son increíblemente claros.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-5xl mx-auto">
        <FadeInView className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
        </FadeInView>

        <StaggerList className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <Card className="h-full flex flex-col gap-4">
                <p className="text-neutral-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div
                    className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-bold text-sm flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
