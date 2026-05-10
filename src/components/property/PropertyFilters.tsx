'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

type ListingFilter = 'all' | 'sale' | 'rent'

export default function PropertyFilters() {
  const [listing, setListing] = useState<ListingFilter>('all')
  const [query, setQuery] = useState('')

  return (
    <div className="flex flex-col gap-3">
      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Buscar por colonia, calle o ciudad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
          aria-label="Buscar propiedades"
        />
      </div>

      {/* Listing type tabs */}
      <div
        className="flex rounded-xl border border-neutral-200 overflow-hidden text-sm font-medium"
        role="group"
        aria-label="Tipo de listado"
      >
        {([['all', 'Todos'], ['sale', 'Venta'], ['rent', 'Renta']] as [ListingFilter, string][]).map(
          ([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setListing(value)}
              className={cn(
                'flex-1 py-2 transition-colors',
                listing === value
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50'
              )}
              aria-pressed={listing === value}
            >
              {label}
            </button>
          )
        )}
      </div>

      {/* More filters placeholder */}
      <button
        type="button"
        className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
        aria-label="Más filtros"
      >
        <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
        Más filtros
      </button>
    </div>
  )
}
