'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const ease = [0.25, 0.46, 0.45, 0.94] as const

function blurSlideUp(reduced: boolean): Variants {
  if (reduced) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.7 } },
    }
  }
  return {
    hidden:  { opacity: 0, filter: 'blur(12px)', y: 28 },
    visible: { opacity: 1, filter: 'blur(0px)',  y: 0, transition: { duration: 0.7, ease } },
  }
}

function staggerContainer(staggerDelay = 0.09): Variants {
  return {
    hidden:  {},
    visible: { transition: { staggerChildren: staggerDelay } },
  }
}

export function FadeInView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const variants = blurSlideUp(!!reduced)

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerList({
  children,
  className,
  staggerDelay = 0.09,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer(staggerDelay)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  const variants = blurSlideUp(!!reduced)
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

export function WordSplit({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const words = text.split(' ')

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={reduced ? { opacity: 0 } : { filter: 'blur(10px)', opacity: 0, y: 40 }}
          animate={
            inView
              ? reduced
                ? { opacity: 1 }
                : { filter: 'blur(0px)', opacity: 1, y: 0 }
              : undefined
          }
          transition={
            reduced
              ? { duration: 0.7, delay: i * 0.05 }
              : {
                  duration: 0.7,
                  delay: (i * 100) / 1000,
                  times: [0, 0.5, 1],
                  ease,
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function LineReveal({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transformOrigin: 'left' }}
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
