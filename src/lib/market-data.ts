export interface ZoneData {
  zone: string
  pricePerSqm: number
  changeMonth: number
  changeYear: number
  avgDaysOnMarket: number
  totalListings: number
  demand: 'alta' | 'media' | 'baja'
}

export interface PriceHistory {
  month: string
  polanco: number
  santafe: number
  condesa: number
  reforma: number
}

export interface OnlineMarketData {
  type: string
  avgMultiple: number
  avgMonthlyRevenue: number
  totalListings: number
  avgDaysToSell: number
}

export const ZONE_DATA: ZoneData[] = [
  { zone: 'Polanco',       pricePerSqm: 52000, changeMonth: 2.8,  changeYear: 14.2, avgDaysOnMarket: 38, totalListings: 124, demand: 'alta' },
  { zone: 'Santa Fe',      pricePerSqm: 36000, changeMonth: 6.1,  changeYear: 18.7, avgDaysOnMarket: 52, totalListings: 89,  demand: 'alta' },
  { zone: 'Reforma',       pricePerSqm: 48000, changeMonth: 0.4,  changeYear: 8.1,  avgDaysOnMarket: 45, totalListings: 67,  demand: 'media' },
  { zone: 'Condesa',       pricePerSqm: 42000, changeMonth: 3.5,  changeYear: 11.3, avgDaysOnMarket: 29, totalListings: 103, demand: 'alta' },
  { zone: 'Del Valle',     pricePerSqm: 28000, changeMonth: 1.9,  changeYear: 7.4,  avgDaysOnMarket: 61, totalListings: 78,  demand: 'media' },
  { zone: 'Xochimilco',    pricePerSqm: 4500,  changeMonth: 1.2,  changeYear: 4.8,  avgDaysOnMarket: 91, totalListings: 34,  demand: 'baja' },
  { zone: 'Nápoles',       pricePerSqm: 31000, changeMonth: 2.1,  changeYear: 9.2,  avgDaysOnMarket: 44, totalListings: 56,  demand: 'media' },
  { zone: 'Lomas Chapultepec', pricePerSqm: 61000, changeMonth: 1.7, changeYear: 12.1, avgDaysOnMarket: 72, totalListings: 41, demand: 'media' },
]

export const PRICE_HISTORY: PriceHistory[] = [
  { month: 'Nov', polanco: 46000, santafe: 30500, condesa: 37000, reforma: 44000 },
  { month: 'Dic', polanco: 47200, santafe: 31000, condesa: 38200, reforma: 44500 },
  { month: 'Ene', polanco: 48100, santafe: 31800, condesa: 38900, reforma: 45100 },
  { month: 'Feb', polanco: 49000, santafe: 32500, condesa: 39800, reforma: 45800 },
  { month: 'Mar', polanco: 50200, santafe: 33900, condesa: 40500, reforma: 46200 },
  { month: 'Abr', polanco: 51100, santafe: 34800, condesa: 41400, reforma: 46800 },
  { month: 'May', polanco: 52000, santafe: 36000, condesa: 42000, reforma: 48000 },
]

export const ONLINE_MARKET: OnlineMarketData[] = [
  { type: 'SaaS',           avgMultiple: 9.8,  avgMonthlyRevenue: 85000,  totalListings: 14, avgDaysToSell: 67 },
  { type: 'E-commerce',     avgMultiple: 3.5,  avgMonthlyRevenue: 112000, totalListings: 22, avgDaysToSell: 45 },
  { type: 'Blog / Contenido', avgMultiple: 28, avgMonthlyRevenue: 7200,   totalListings: 31, avgDaysToSell: 38 },
  { type: 'Newsletter',     avgMultiple: 22,   avgMonthlyRevenue: 14000,  totalListings: 9,  avgDaysToSell: 52 },
  { type: 'App móvil',      avgMultiple: 5.2,  avgMonthlyRevenue: 43000,  totalListings: 7,  avgDaysToSell: 81 },
  { type: 'Agencia',        avgMultiple: 2.8,  avgMonthlyRevenue: 195000, totalListings: 18, avgDaysToSell: 94 },
]
