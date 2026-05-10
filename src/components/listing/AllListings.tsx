'use client'

import { useState } from 'react'
import { Search, Plus } from 'lucide-react'
import Link from 'next/link'
import { MOCK_LISTINGS } from '@/lib/mock-listings'
import type { ListingCategory } from '@/types/listing'
import ListingCard from './ListingCard'
import { cn } from '@/lib/utils'

type Filter = ListingCategory | 'all'

export default function AllListings() {
  const [filter, setFilter] = useState<Filter>('all')
  const [query, setQuery] = useState('')

  const filtered = MOCK_LISTINGS.filter((l) => {
    if (filter !== 'all' && l.category !== filter) return false
    if (query) {
      const q = query.toLowerCase()
      return (
        l.title.toLowerCase().includes(q) ||
        l.tags.some((t) => t.includes(q)) ||
        l.physical?.neighborhood?.toLowerCase().includes(q) ||
        l.physical?.city?.toLowerCase().includes(q)
      )
    }
    return true
  })

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-neutral-200 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-neutral-900">Explorar</h1>
          <Link
            href="/publish"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-600 text-white text-xs font-semibold hover:bg-brand-700 transition-colors"
            aria-label="Publicar anuncio"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
            Publicar
          </Link>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            placeholder="Buscar colonia, ciudad, tipo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            aria-label="Buscar listados"
          />
        </div>

        {/* Category tabs */}
        <div className="flex rounded-xl border border-neutral-200 overflow-hidden text-sm font-medium" role="group" aria-label="Categoría">
          {([['all', 'Todo'], ['physical', 'Inmuebles'], ['online', 'Digitales']] as [Filter, string][]).map(
            ([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                className={cn(
                  'flex-1 py-2 transition-colors',
                  filter === value ? 'bg-brand-600 text-white' : 'bg-white text-neutral-600 hover:bg-neutral-50'
                )}
                aria-pressed={filter === value}
              >
                {label}
              </button>
            )
          )}
        </div>
      </div>

      {/* Count */}
      <div className="px-4 py-2 text-xs text-neutral-500 border-b border-neutral-100">
        {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
      </div>

      {/* List */}
      <ul className="flex-1 overflow-y-auto divide-y divide-neutral-100" role="list" aria-label="Listados">
        {filtered.length === 0 ? (
          <li className="p-8 text-center text-sm text-neutral-400">No se encontraron resultados.</li>
        ) : (
          filtered.map((listing) => (
            <li key={listing.id}>
              <ListingCard listing={listing} />
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
