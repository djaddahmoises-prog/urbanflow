'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  loading?: boolean
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  'aria-label'?: string
  'aria-pressed'?: boolean
  'aria-checked'?: boolean
  role?: string
  id?: string
  form?: string
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:   'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200',
  ghost:     'bg-transparent text-neutral-700 hover:bg-neutral-100',
  outline:   'border border-neutral-300 text-neutral-800 hover:bg-neutral-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm h-8',
  md: 'px-5 py-2.5 text-sm h-10',
  lg: 'px-7 py-3.5 text-base h-12',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, children, className, type = 'button', ...props }, ref) => (
    <motion.button
      ref={ref}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
        </svg>
      )}
      {children}
    </motion.button>
  )
)
Button.displayName = 'Button'

export default Button
