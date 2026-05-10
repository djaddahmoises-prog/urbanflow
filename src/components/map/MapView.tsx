'use client'

import { useEffect, useRef } from 'react'
import { MOCK_PROPERTIES } from '@/lib/mock-properties'
import { formatCurrency } from '@/lib/utils'

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    if (!token) return

    import('mapbox-gl').then((mapboxgl) => {
      const mapboxModule = mapboxgl.default ?? mapboxgl
      mapboxModule.accessToken = token

      if (mapRef.current || !mapContainer.current) return

      const map = new mapboxModule.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-99.18, 19.41],
        zoom: 11,
      })

      mapRef.current = map

      map.on('load', () => {
        MOCK_PROPERTIES.forEach((p) => {
          const el = document.createElement('div')
          el.className = 'map-marker'
          el.style.cssText = `
            background: #4f52e7;
            color: white;
            font-size: 11px;
            font-weight: 700;
            padding: 4px 8px;
            border-radius: 9999px;
            border: 2px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            cursor: pointer;
            white-space: nowrap;
          `
          el.textContent = formatCurrency(p.price).replace('MX$', '$')
          el.setAttribute('role', 'button')
          el.setAttribute('aria-label', `${p.title} — ${formatCurrency(p.price)}`)
          el.setAttribute('tabindex', '0')

          new mapboxModule.Marker({ element: el })
            .setLngLat([p.lng, p.lat])
            .setPopup(
              new mapboxModule.Popup({ offset: 25 }).setHTML(
                `<strong>${p.title}</strong><br>${p.neighborhood}<br>${formatCurrency(p.price)}`
              )
            )
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
      <div className="flex-1 flex items-center justify-center bg-neutral-100 text-neutral-500 text-sm">
        <div className="text-center">
          <p className="font-medium mb-1">Mapa no disponible</p>
          <p className="text-xs">Configura NEXT_PUBLIC_MAPBOX_TOKEN en .env.local</p>
        </div>
      </div>
    )
  }

  return <div ref={mapContainer} className="flex-1 w-full h-full" aria-label="Mapa de propiedades" role="img" />
}
