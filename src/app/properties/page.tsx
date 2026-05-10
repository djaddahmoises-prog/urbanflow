import { Suspense } from 'react'
import PropertyList from '@/components/property/PropertyList'
import PropertyFilters from '@/components/property/PropertyFilters'
import MapView from '@/components/map/MapView'

export const metadata = {
  title: 'Propiedades — UrbanFlow',
  description: 'Explora propiedades en venta y renta en México. Filtra por zona, precio y tipo.',
}

export default function PropertiesPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-full md:w-96 flex flex-col border-r border-neutral-200 bg-white overflow-hidden">
        <div className="p-4 border-b border-neutral-200">
          <h1 className="text-lg font-bold text-neutral-900 mb-3">Propiedades</h1>
          <PropertyFilters />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Suspense fallback={<div className="p-4 text-sm text-neutral-500">Cargando propiedades...</div>}>
            <PropertyList />
          </Suspense>
        </div>
      </aside>

      {/* Map */}
      <div className="hidden md:flex flex-1 relative">
        <MapView />
      </div>
    </div>
  )
}
