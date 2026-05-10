import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'

const steps = [
  { n: '01', title: 'Crea tu cuenta', desc: 'Regístrate gratis en menos de 2 minutos. Sin tarjeta de crédito.' },
  { n: '02', title: 'Explora el mercado', desc: 'Busca propiedades en el mapa o consulta el estudio de mercado por zona.' },
  { n: '03', title: 'Conecta con un broker', desc: 'Agenda una sesión con un broker certificado o gestiona tu operación solo.' },
  { n: '04', title: 'Cierra la operación', desc: 'Paga de forma segura con Stripe, firma digitalmente y recibe tu comprobante.' },
]

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-white" aria-labelledby="how-heading">
      <div className="max-w-5xl mx-auto">
        <FadeInView className="text-center mb-16">
          <h2 id="how-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            En cuatro pasos simples puedes comprar, vender o estudiar el mercado.
          </p>
        </FadeInView>

        <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ n, title, desc }) => (
            <StaggerItem key={n}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                  {n}
                </div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  )
}
