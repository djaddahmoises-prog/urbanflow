'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  interactive?: boolean
  onClick?: () => void
}

export default function Card({ children, className, interactive, onClick }: CardProps) {
  const base = 'bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm'

  if (interactive) {
    return (
      <motion.div
        className={cn(base, 'cursor-pointer', className)}
        whileHover={{ y: -7, scale: 1.018 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={cn(base, className)}>{children}</div>
}
