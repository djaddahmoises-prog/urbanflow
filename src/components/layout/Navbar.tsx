'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Propiedades', href: '/properties' },
  { label: 'Precios', href: '/pricing' },
  { label: 'Brokers', href: '/brokers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-neutral-900"
          aria-label="UrbanFlow — inicio"
        >
          <span className="w-8 h-8 rounded-xl bg-brand-600 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          UrbanFlow
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
              >
                {l.label}
                <span
                  className="absolute inset-x-4 bottom-1 h-px bg-brand-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms] origin-left"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Iniciar sesión
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-colors"
          >
            Empezar gratis
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-neutral-200 bg-white"
          >
            <ul className="flex flex-col px-4 py-4 gap-1" role="list">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-neutral-100 mt-1 flex flex-col gap-2">
                <Link
                  href="/login"
                  className="block px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 rounded-lg transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="block text-center px-3 py-2.5 text-sm font-semibold bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Empezar gratis
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
