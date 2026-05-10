import { Suspense } from 'react'
import AllListings from '@/components/listing/AllListings'
import MapView from '@/components/map/MapView'

export const metadata = {
  title: 'Explorar — UrbanFlow',
  description: 'Explora propiedades físicas y negocios digitales en venta en México.',
}

export default function PropertiesPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-full md:w-[420px] flex flex-col border-r border-neutral-200 bg-white overflow-hidden shrink-0">
        <Suspense fallback={<div className="p-4 text-sm text-neutral-500">Cargando...</div>}>
          <AllListings />
        </Suspense>
      </aside>

      {/* Map */}
      <div className="hidden md:flex flex-1 relative">
        <MapView />
      </div>
    </div>
  )
}
