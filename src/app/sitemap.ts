import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://urbanflow.mx'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE,                  lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: `${BASE}/properties`,  lastModified: now, changeFrequency: 'daily',   priority: 0.9 },
    { url: `${BASE}/market`,      lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE}/pricing`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/brokers`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/publish`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/login`,       lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE}/register`,    lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
