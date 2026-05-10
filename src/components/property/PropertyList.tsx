import { MOCK_PROPERTIES } from '@/lib/mock-properties'
import PropertyCard from './PropertyCard'

export default function PropertyList() {
  return (
    <ul className="flex flex-col divide-y divide-neutral-100" role="list" aria-label="Lista de propiedades">
      {MOCK_PROPERTIES.map((p) => (
        <li key={p.id}>
          <PropertyCard property={p} />
        </li>
      ))}
    </ul>
  )
}
