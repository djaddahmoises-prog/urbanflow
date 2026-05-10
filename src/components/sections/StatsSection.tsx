'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { StaggerList, StaggerItem, LineReveal } from '@/components/animations/motion'

const stats = [
  { value: 12400, suffix: '+', label: 'Propiedades listadas' },
  { value: 3200,  suffix: '+', label: 'Brokers certificados' },
  { value: 850,   suffix: 'M+', label: 'en transacciones (MXN)' },
  { value: 98,    suffix: '%',  label: 'Satisfacción de clientes' },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {display.toLocaleString('es-MX')}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white border-y border-neutral-100" aria-label="Estadísticas">
      <div className="max-w-5xl mx-auto">
        <LineReveal className="h-px bg-brand-200 mb-12" />
        <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl sm:text-5xl font-extrabold text-brand-600 tabular-nums">
                <AnimatedNumber target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-neutral-500">{s.label}</p>
            </StaggerItem>
          ))}
        </StaggerList>
        <LineReveal className="h-px bg-brand-200 mt-12" />
      </div>
    </section>
  )
}
