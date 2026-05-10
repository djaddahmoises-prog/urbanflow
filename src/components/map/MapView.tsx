'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, BedDouble, Bath, Square, TrendingUp, Globe, BadgeCheck, ExternalLink } from 'lucide-react'
import { MOCK_LISTINGS } from '@/lib/mock-listings'
import type { Listing } from '@/types/listing'
import { formatCurrency, formatArea } from '@/lib/utils'

const CATEGORY_COLORS: Record<string, string> = {
  physical: '#4f52e7',
  online:   '#f59e0b',
}

function ListingPopup({ listing, onClose }: { listing: Listing; onClose: () => void }) {
  const isPhysical = listing.category === 'physical'

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 6, scale: 0.97, filter: 'blur(4px)' }}
      transition={{ duration: 0.25 }}
      className="absolute bottom-4 left-4 z-50 w-80 bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden"
      role="dialog"
      aria-label={`Detalles: ${listing.title}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-3 border-b border-neutral-100">
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              isPhysical
                ? listing.mode === 'sale' ? 'bg-brand-100 text-brand-700' : 'bg-amber-100 text-amber-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}>
              {isPhysical ? (listing.mode === 'sale' ? 'Venta' : 'Renta') : 'Digital'}
            </span>
            {listing.featured && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                Destacado
              </span>
            )}
          </div>
          <h3 className="text-sm font-semibold text-neutral-900 leading-snug">{listing.title}</h3>
          {isPhysical && listing.physical && (
            <p className="text-xs text-neutral-500 mt-0.5">{listing.physical.neighborhood}, {listing.physical.city}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-neutral-100 transition-colors shrink-0"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-neutral-500" aria-hidden="true" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        <p className="text-lg font-extrabold text-neutral-900">
          {formatCurrency(listing.price)}
          {isPhysical && listing.mode === 'rent' && <span className="text-sm font-normal text-neutral-500">/mes</span>}
        </p>

        {isPhysical && listing.physical && (
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            {listing.physical.bedrooms && (
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5" aria-hidden="true" /> {listing.physical.bedrooms}
              </span>
            )}
            {listing.physical.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" aria-hidden="true" /> {listing.physical.bathrooms}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Square className="w-3.5 h-3.5" aria-hidden="true" /> {formatArea(listing.physical.area)}
            </span>
            {listing.pricePerSqm && (
              <span className="text-brand-600 font-medium">
                {formatCurrency(listing.pricePerSqm)}/m²
              </span>
            )}
          </div>
        )}

        {!isPhysical && listing.online && (
          <div className="grid grid-cols-2 gap-2">
            {listing.online.monthlyRevenue && (
              <div className="bg-neutral-50 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Ingresos/mes</p>
                <p className="text-sm font-bold text-neutral-900">{formatCurrency(listing.online.monthlyRevenue)}</p>
              </div>
            )}
            {listing.online.monthlyProfit && (
              <div className="bg-green-50 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Beneficio/mes</p>
                <p className="text-sm font-bold text-green-700">{formatCurrency(listing.online.monthlyProfit)}</p>
              </div>
            )}
            {listing.multiplier && (
              <div className="bg-brand-50 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Múltiplo</p>
                <p className="text-sm font-bold text-brand-700">{listing.multiplier}x</p>
              </div>
            )}
            {listing.online.ageMonths && (
              <div className="bg-neutral-50 rounded-lg p-2.5">
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Antigüedad</p>
                <p className="text-sm font-bold text-neutral-900">{listing.online.ageMonths} meses</p>
              </div>
            )}
          </div>
        )}

        {listing.trend && (
          <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
            <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
            +{listing.trend}% vs mes anterior
          </div>
        )}

        {/* Seller */}
        <div className="flex items-center gap-2 pt-1 border-t border-neutral-100">
          <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-[10px] font-bold flex items-center justify-center" aria-hidden="true">
            {listing.seller.avatar}
          </div>
          <span className="text-xs text-neutral-600">{listing.seller.name}</span>
          {listing.seller.verified && (
            <BadgeCheck className="w-3.5 h-3.5 text-brand-500" aria-label="Verificado" />
          )}
          <span className="ml-auto text-xs text-neutral-400">{listing.viewCount} vistas</span>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <a
          href={`/listings/${listing.id}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
        >
          Ver detalles
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  )
}

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)
  const [selected, setSelected] = useState<Listing | null>(null)

  const physicalListings = MOCK_LISTINGS.filter((l) => l.category === 'physical')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!token) return

    import('mapbox-gl').then((mapboxgl) => {
      const mb = mapboxgl.default ?? mapboxgl
      mb.accessToken = token
      if (mapRef.current || !mapContainer.current) return

      const map = new mb.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-99.18, 19.41],
        zoom: 11,
      })

      mapRef.current = map

      map.on('load', () => {
        physicalListings.forEach((listing) => {
          if (!listing.physical) return
          const el = document.createElement('button')
          el.type = 'button'
          el.setAttribute('aria-label', `${listing.title} — ${formatCurrency(listing.price)}`)

          const color = listing.featured ? '#7c3aed' : CATEGORY_COLORS.physical
          const price = listing.mode === 'rent'
            ? `$${Math.round(listing.price / 1000)}k/mes`
            : `$${(listing.price / 1_000_000).toFixed(1)}M`

          el.style.cssText = `
            background: ${color};
            color: white;
            font-size: 11px;
            font-weight: 700;
            padding: 5px 10px;
            border-radius: 9999px;
            border: 2.5px solid white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.25);
            cursor: pointer;
            white-space: nowrap;
            transition: transform 0.15s, box-shadow 0.15s;
            font-family: Inter, system-ui, sans-serif;
          `
          el.textContent = price
          el.onmouseenter = () => { el.style.transform = 'scale(1.1)'; el.style.boxShadow = '0 4px 16px rgba(0,0,0,0.35)' }
          el.onmouseleave = () => { el.style.transform = 'scale(1)'; el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.25)' }
          el.onclick = () => setSelected(listing)

          new mb.Marker({ element: el })
            .setLngLat([listing.physical.lng, listing.physical.lat])
            .addTo(map)
        })
      })
    })

    return () => {
      if (mapRef.current) {
        ;(mapRef.current as { remove: () => void }).remove()
        mapRef.current = null
      }
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
    return (
      <div className="flex-1 flex items-center justify-center bg-neutral-100 text-neutral-500">
        <div className="text-center px-6">
          <Globe className="w-8 h-8 mx-auto mb-3 text-neutral-300" aria-hidden="true" />
          <p className="font-medium text-sm">Mapa no disponible</p>
          <p className="text-xs mt-1">Configura NEXT_PUBLIC_MAPBOX_TOKEN en .env.local</p>
          <div className="mt-6 flex flex-col gap-2 text-left max-w-xs mx-auto">
            {physicalListings.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setSelected(selected?.id === l.id ? null : l)}
                className="flex items-center justify-between px-3 py-2 bg-white rounded-xl border border-neutral-200 text-xs hover:border-brand-300 transition-colors"
              >
                <span className="font-medium text-neutral-800 truncate pr-2">{l.title}</span>
                <span className="text-brand-600 font-bold shrink-0">{formatCurrency(l.price)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 relative">
      <div ref={mapContainer} className="w-full h-full" aria-label="Mapa de propiedades" role="img" />

      {/* Legend */}
      <div className="absolute top-3 right-3 bg-white rounded-xl border border-neutral-200 shadow-sm px-3 py-2 flex flex-col gap-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-brand-600" aria-hidden="true" />
          <span className="text-neutral-600">Inmueble</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-600" aria-hidden="true" />
          <span className="text-neutral-600">Destacado</span>
        </div>
      </div>

      {/* Publish CTA */}
      <div className="absolute top-3 left-3">
        <a
          href="/publish"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold shadow-lg hover:bg-brand-700 transition-colors"
        >
          + Publicar aquí
        </a>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected && (
          <ListingPopup listing={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
