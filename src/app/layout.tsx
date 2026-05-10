import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/layout/Providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const BASE = process.env.NEXT_PUBLIC_APP_URL ?? 'https://urbanflow.mx'

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'UrbanFlow AI — Bienes raíces en México',
    template: '%s — UrbanFlow AI',
  },
  description:
    'Compra, vende y estudia el mercado de metros cuadrados y bienes raíces en México. Datos en tiempo real, brokers certificados y pagos seguros con Stripe.',
  keywords: [
    'bienes raíces México', 'urbanflow', 'UrbanFlow AI', 'inmobiliaria México',
    'renta propiedades', 'venta propiedades', 'metros cuadrados', 'brokers inmobiliarios',
    'inversión inmobiliaria', 'precio m2 México',
  ],
  authors: [{ name: 'UrbanFlow AI' }],
  creator: 'UrbanFlow AI',
  openGraph: {
    siteName: 'UrbanFlow AI',
    title: 'UrbanFlow AI — El mercado inmobiliario más avanzado de México',
    description: 'Compra, vende e invierte en bienes raíces con datos en tiempo real.',
    type: 'website',
    locale: 'es_MX',
    url: BASE,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UrbanFlow AI — Bienes raíces en México',
    description: 'Compra, vende e invierte en bienes raíces con datos en tiempo real.',
  },
  alternates: {
    canonical: BASE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
