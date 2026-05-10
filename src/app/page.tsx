import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import StatsSection from '@/components/sections/StatsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import PricingSection from '@/components/sections/PricingSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CtaSection from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
