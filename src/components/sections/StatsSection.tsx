'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const stats = [
  { value: 12400, suffix: '+',  label: 'Propiedades listadas',    color: '#E25500' },
  { value: 3200,  suffix: '+',  label: 'Brokers certificados',     color: 'white' },
  { value: 850,   suffix: 'M+', label: 'MXN en transacciones',    color: '#E25500' },
  { value: 98,    suffix: '%',  label: 'Satisfacción clientes',    color: 'white' },
]

function AnimatedNumber({ target, suffix, color }: { target: number; suffix: string; color: string }) {
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

  return <span ref={ref} style={{ color }}>{display.toLocaleString('es-MX')}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-2">
            <p className="text-4xl sm:text-5xl font-extrabold tabular-nums">
              <AnimatedNumber target={s.value} suffix={s.suffix} color={s.color} />
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
