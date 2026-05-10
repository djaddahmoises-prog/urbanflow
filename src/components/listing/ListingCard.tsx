'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BedDouble, Bath, Square, TrendingUp, BadgeCheck, Globe, Star } from 'lucide-react'
import type { Listing } from '@/types/listing'
import { formatCurrency, formatArea, cn } from '@/lib/utils'

const onlineTypeLabels: Record<string, string> = {
  saas:           'SaaS',
  ecommerce:      'E-commerce',
  content_site:   'Sitio de contenido',
  mobile_app:     'App móvil',
  marketplace:    'Marketplace',
  newsletter:     'Newsletter',
  agency:         'Agencia',
  social_account: 'Cuenta social',
}

const physicalTypeLabels: Record<string, string> = {
  apartment:  'Departamento',
  house:      'Casa',
  land:       'Terreno',
  commercial: 'Local comercial',
  office:     'Oficina',
  industrial: 'Industrial',
  parking:    'Estacionamiento',
}

export default function ListingCard({ listing: l }: { listing: Listing }) {
  const isPhysical = l.category === 'physical'

  return (
    <motion.article whileHover={{ backgroundColor: 'rgb(248 250 252)' }} transition={{ duration: 0.15 }}>
      <Link
        href={`/listings/${l.id}`}
        className="flex gap-4 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
        aria-label={`Ver detalles de ${l.title}`}
      >
        {/* Thumbnail */}
        <div
          className={cn(
            'w-20 h-20 rounded-xl shrink-0 flex items-center justify-center',
            isPhysical ? 'bg-brand-100 text-brand-400' : 'bg-amber-100 text-amber-500'
          )}
          aria-hidden="true"
        >
          {isPhysical ? <Square className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
        </div>

        <div className="flex-1 min-w-0">
          {/* Badges */}
          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
            <span className={cn(
              'text-xs font-semibold px-2 py-0.5 rounded-full',
              isPhysical
                ? l.mode === 'sale' ? 'bg-brand-100 text-brand-700' : 'bg-amber-100 text-amber-700'
                : 'bg-yellow-100 text-yellow-700'
            )}>
              {isPhysical ? (l.mode === 'sale' ? 'Venta' : 'Renta') : 'Digital'}
            </span>
            <span className="text-xs text-neutral-400">
              {isPhysical
                ? physicalTypeLabels[l.physicalType ?? ''] ?? l.physicalType
                : onlineTypeLabels[l.onlineType ?? ''] ?? l.onlineType}
            </span>
            {l.featured && (
              <span className="flex items-center gap-0.5 text-xs font-semibold text-purple-600">
                <Star className="w-3 h-3" aria-hidden="true" /> Destacado
              </span>
            )}
          </div>

          <h3 className="text-sm font-semibold text-neutral-900 truncate">{l.title}</h3>

          {isPhysical && l.physical && (
            <p className="text-xs text-neutral-500 truncate mb-1.5">
              {l.physical.neighborhood}, {l.physical.city}
            </p>
          )}

          {/* Physical stats */}
          {isPhysical && l.physical && (
            <div className="flex items-center gap-3 text-xs text-neutral-500 flex-wrap mb-1.5">
              {l.physical.bedrooms && (
                <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" aria-hidden="true" />{l.physical.bedrooms}</span>
              )}
              {l.physical.bathrooms && (
                <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" aria-hidden="true" />{l.physical.bathrooms}</span>
              )}
              <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" aria-hidden="true" />{formatArea(l.physical.area)}</span>
            </div>
          )}

          {/* Online stats */}
          {!isPhysical && l.online && (
            <div className="flex items-center gap-3 text-xs text-neutral-500 flex-wrap mb-1.5">
              {l.online.monthlyRevenue && (
                <span>💰 {formatCurrency(l.online.monthlyRevenue)}/mes</span>
              )}
              {l.multiplier && (
                <span className="text-brand-600 font-semibold">{l.multiplier}x múltiplo</span>
              )}
            </div>
          )}

          {/* Price row */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-neutral-900">
              {formatCurrency(l.price)}
              {isPhysical && l.mode === 'rent' && (
                <span className="font-normal text-neutral-500 text-xs">/mes</span>
              )}
            </p>
            {l.trend && (
              <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <TrendingUp className="w-3 h-3" aria-hidden="true" />+{l.trend}%
              </span>
            )}
          </div>

          {/* Seller */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 text-[9px] font-bold flex items-center justify-center" aria-hidden="true">
              {l.seller.avatar}
            </div>
            <span className="text-xs text-neutral-400">{l.seller.name}</span>
            {l.seller.verified && <BadgeCheck className="w-3.5 h-3.5 text-brand-400" aria-label="Verificado" />}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
