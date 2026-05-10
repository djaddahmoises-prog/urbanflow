export type PropertyType = 'apartment' | 'house' | 'land' | 'commercial' | 'office'
export type ListingType = 'sale' | 'rent'

export interface Property {
  id: string
  title: string
  type: PropertyType
  listingType: ListingType
  price: number
  pricePerSqm: number
  area: number
  bedrooms?: number
  bathrooms?: number
  address: string
  neighborhood: string
  city: string
  lat: number
  lng: number
  images: string[]
  description: string
  broker?: {
    id: string
    name: string
    avatar: string
    verified: boolean
  }
  createdAt: string
  trend?: number
}
