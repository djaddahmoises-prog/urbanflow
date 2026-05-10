'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Building2, Globe, Check } from 'lucide-react'
import StepCategory from './steps/StepCategory'
import StepDetails from './steps/StepDetails'
import StepPayment from './steps/StepPayment'
import type { ListingCategory, ListingPlan } from '@/types/listing'

export type PublishDraft = {
  category: ListingCategory | null
  physicalType: string
  onlineType: string
  mode: string
  title: string
  description: string
  price: string
  area: string
  bedrooms: string
  bathrooms: string
  address: string
  neighborhood: string
  city: string
  monthlyRevenue: string
  monthlyProfit: string
  techStack: string
  reasonForSelling: string
}

const EMPTY_DRAFT: PublishDraft = {
  category: null,
  physicalType: 'apartment',
  onlineType: 'saas',
  mode: 'sale',
  title: '',
  description: '',
  price: '',
  area: '',
  bedrooms: '',
  bathrooms: '',
  address: '',
  neighborhood: '',
  city: '',
  monthlyRevenue: '',
  monthlyProfit: '',
  techStack: '',
  reasonForSelling: '',
}

const steps = ['Tipo', 'Detalles', 'Publicar']

export default function PublishFlow() {
  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState<PublishDraft>(EMPTY_DRAFT)

  const update = (patch: Partial<PublishDraft>) => setDraft((d) => ({ ...d, ...patch }))
  const next = () => setStep((s) => Math.min(s + 1, 2))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-4 sm:px-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-neutral-900">Publicar anuncio</h1>
          <p className="text-neutral-500 mt-1">Llega a miles de compradores, inversores y brokers.</p>
        </div>

        {/* Step indicators */}
        <nav aria-label="Pasos de publicación" className="flex items-center gap-0 mb-10">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={[
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all',
                    i < step  ? 'bg-brand-600 text-white'
                    : i === step ? 'bg-brand-600 text-white ring-4 ring-brand-200'
                    : 'bg-neutral-200 text-neutral-400',
                  ].join(' ')}
                  aria-current={i === step ? 'step' : undefined}
                >
                  {i < step ? <Check className="w-4 h-4" aria-hidden="true" /> : i + 1}
                </div>
                <span className={`text-xs font-medium ${i === step ? 'text-brand-600' : 'text-neutral-400'}`}>
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-px mx-2 mb-4 ${i < step ? 'bg-brand-400' : 'bg-neutral-200'}`} aria-hidden="true" />
              )}
            </div>
          ))}
        </nav>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {step === 0 && <StepCategory draft={draft} update={update} onNext={next} />}
            {step === 1 && <StepDetails  draft={draft} update={update} onNext={next} onBack={back} />}
            {step === 2 && <StepPayment  draft={draft} onBack={back} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
