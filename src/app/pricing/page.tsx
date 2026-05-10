import PricingSection from '@/components/sections/PricingSection'

export const metadata = {
  title: 'Precios — UrbanFlow',
  description: 'Planes flexibles para compradores, inversionistas y brokers.',
}

export default function PricingPage() {
  return (
    <div className="py-12">
      <PricingSection />
    </div>
  )
}
