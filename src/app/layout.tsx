import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'UrbanFlow — Mercado Inmobiliario Inteligente',
  description:
    'Compra, vende y estudia el mercado de metros cuadrados y bienes raíces en México. Datos en tiempo real, brokers certificados y pagos seguros.',
  keywords: ['bienes raíces', 'inmobiliaria', 'renta', 'venta', 'metros cuadrados', 'urbanflow'],
  openGraph: {
    title: 'UrbanFlow',
    description: 'El mercado inmobiliario más avanzado de México.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
