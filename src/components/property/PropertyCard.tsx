'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BedDouble, Bath, Square, TrendingUp, BadgeCheck } from 'lucide-react'
import type { Property } from '@/types/property'
import { formatCurrency, formatArea, cn } from '@/lib/utils'

const typeLabels: Record<Property['type'], string> = {
  apartment: 'Departamento',
  house:     'Casa',
  land:      'Terreno',
  commercial: 'Comercial',
  office:    'Oficina',
}

export default function PropertyCard({ property: p }: { property: Property }) {
  return (
    <motion.article
      whileHover={{ backgroundColor: 'rgb(248 250 252)' }}
      transition={{ duration: 0.15 }}
    >
      <Link
        href={`/properties/${p.id}`}
        className="flex gap-4 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
        aria-label={`Ver detalles de ${p.title}`}
      >
        {/* Thumbnail placeholder */}
        <div
          className="w-20 h-20 rounded-xl bg-brand-100 shrink-0 flex items-center justify-center text-brand-400"
          aria-hidden="true"
        >
          <Square className="w-6 h-6" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={cn(
                'text-xs font-semibold px-2 py-0.5 rounded-full',
                p.listingType === 'sale'
                  ? 'bg-brand-100 text-brand-700'
                  : 'bg-amber-100 text-amber-700'
              )}
            >
              {p.listingType === 'sale' ? 'Venta' : 'Renta'}
            </span>
            <span className="text-xs text-neutral-400">{typeLabels[p.type]}</span>
          </div>

          <h3 className="text-sm font-semibold text-neutral-900 truncate">{p.title}</h3>
          <p className="text-xs text-neutral-500 truncate mb-2">{p.neighborhood}, {p.city}</p>

          <div className="flex items-center gap-3 text-xs text-neutral-500 flex-wrap">
            {p.bedrooms && (
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5" aria-hidden="true" /> {p.bedrooms}
              </span>
            )}
            {p.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" aria-hidden="true" /> {p.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Square className="w-3.5 h-3.5" aria-hidden="true" /> {formatArea(p.area)}
            </span>
          </div>

          <div className="flex items-center justify-between mt-2">
            <p className="text-sm font-bold text-neutral-900">
              {formatCurrency(p.price)}
              {p.listingType === 'rent' && <span className="font-normal text-neutral-500 text-xs">/mes</span>}
            </p>
            {p.trend && (
              <span className="flex items-center gap-1 text-xs text-success font-medium">
                <TrendingUp className="w-3 h-3" aria-hidden="true" />
                +{p.trend}%
              </span>
            )}
          </div>

          {p.broker && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-5 h-5 rounded-full bg-brand-200 text-brand-700 text-[10px] font-bold flex items-center justify-center" aria-hidden="true">
                {p.broker.avatar}
              </div>
              <span className="text-xs text-neutral-500">{p.broker.name}</span>
              {p.broker.verified && (
                <BadgeCheck className="w-3.5 h-3.5 text-brand-500" aria-label="Broker verificado" />
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
