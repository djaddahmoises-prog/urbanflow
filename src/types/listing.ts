// Physical real estate
export type PhysicalType = 'apartment' | 'house' | 'land' | 'commercial' | 'office' | 'industrial' | 'parking'

// Online / digital assets
export type OnlineType =
  | 'saas'           // Software as a Service
  | 'ecommerce'      // Online store
  | 'content_site'   // Blog, niche site
  | 'marketplace'    // Two-sided marketplace
  | 'mobile_app'     // iOS / Android app
  | 'agency'         // Service agency
  | 'newsletter'     // Email newsletter
  | 'social_account' // Social media account/page

export type ListingCategory = 'physical' | 'online'
export type ListingMode = 'sale' | 'rent'
export type ListingStatus = 'draft' | 'pending_payment' | 'active' | 'sold' | 'expired'

export interface PhysicalDetails {
  area: number
  bedrooms?: number
  bathrooms?: number
  floors?: number
  parking?: number
  yearBuilt?: number
  address: string
  neighborhood: string
  city: string
  state: string
  lat: number
  lng: number
}

export interface OnlineDetails {
  url?: string
  monthlyRevenue?: number
  monthlyProfit?: number
  monthlyTraffic?: number
  ageMonths?: number
  techStack?: string[]
  monetization?: string[]
  employees?: number
  reasonForSelling?: string
}

export interface Listing {
  id: string
  category: ListingCategory
  physicalType?: PhysicalType
  onlineType?: OnlineType
  mode: ListingMode
  status: ListingStatus
  title: string
  description: string
  price: number
  pricePerSqm?: number          // physical only
  multiplier?: number           // online only — revenue multiple
  physical?: PhysicalDetails
  online?: OnlineDetails
  images: string[]
  tags: string[]
  seller: {
    id: string
    name: string
    avatar: string
    verified: boolean
    isBroker: boolean
  }
  viewCount: number
  favoriteCount: number
  createdAt: string
  expiresAt: string
  trend?: number
  featured?: boolean
}

// Listing fee tiers
export type ListingPlan = 'basic' | 'featured' | 'premium'

export interface ListingFee {
  plan: ListingPlan
  label: string
  price: number
  durationDays: number
  features: string[]
}

export const LISTING_FEES: ListingFee[] = [
  {
    plan: 'basic',
    label: 'Básico',
    price: 299,
    durationDays: 30,
    features: ['30 días activo', 'Aparece en búsqueda', 'Hasta 5 fotos'],
  },
  {
    plan: 'featured',
    label: 'Destacado',
    price: 799,
    durationDays: 60,
    features: ['60 días activo', 'Pin destacado en el mapa', 'Hasta 15 fotos', 'Badge "Destacado"'],
  },
  {
    plan: 'premium',
    label: 'Premium',
    price: 1499,
    durationDays: 90,
    features: ['90 días activo', 'Posición prioritaria', 'Fotos ilimitadas', 'Reporte de vistas semanal', 'Difusión por email'],
  },
]
