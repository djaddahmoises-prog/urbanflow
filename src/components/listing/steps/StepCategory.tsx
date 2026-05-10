'use client'

import { Building2, Globe } from 'lucide-react'
import type { PublishDraft } from '../PublishFlow'
import type { ListingCategory } from '@/types/listing'
import { cn } from '@/lib/utils'

const categories: { value: ListingCategory; icon: typeof Building2; label: string; desc: string; examples: string }[] = [
  {
    value: 'physical',
    icon: Building2,
    label: 'Inmueble físico',
    desc: 'Departamento, casa, terreno, local, oficina o bodega.',
    examples: 'Ej: Casa en Polanco, Terreno 500 m², Oficina en Torre Mayor',
  },
  {
    value: 'online',
    icon: Globe,
    label: 'Negocio digital',
    desc: 'SaaS, tienda online, blog, app móvil, newsletter o agencia.',
    examples: 'Ej: SaaS $8k MRR, Tienda Shopify, Blog SEO 80k visitas',
  },
]

const physicalTypes = [
  { value: 'apartment', label: 'Departamento' },
  { value: 'house',     label: 'Casa' },
  { value: 'land',      label: 'Terreno' },
  { value: 'commercial',label: 'Local comercial' },
  { value: 'office',    label: 'Oficina' },
  { value: 'industrial',label: 'Bodega/Industrial' },
]

const onlineTypes = [
  { value: 'saas',           label: 'SaaS' },
  { value: 'ecommerce',      label: 'Tienda online' },
  { value: 'content_site',   label: 'Blog / sitio de contenido' },
  { value: 'mobile_app',     label: 'App móvil' },
  { value: 'marketplace',    label: 'Marketplace' },
  { value: 'newsletter',     label: 'Newsletter' },
  { value: 'agency',         label: 'Agencia de servicios' },
  { value: 'social_account', label: 'Cuenta / página social' },
]

const modes = [
  { value: 'sale', label: 'Venta' },
  { value: 'rent', label: 'Renta / Arrendamiento' },
]

interface Props {
  draft: PublishDraft
  update: (p: Partial<PublishDraft>) => void
  onNext: () => void
}

export default function StepCategory({ draft, update, onNext }: Props) {
  const subtypes = draft.category === 'physical' ? physicalTypes : onlineTypes
  const currentSubtype = draft.category === 'physical' ? draft.physicalType : draft.onlineType

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col gap-8">
      {/* Category */}
      <div>
        <h2 className="text-base font-semibold text-neutral-900 mb-4">¿Qué quieres publicar?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {categories.map(({ value, icon: Icon, label, desc, examples }) => (
            <button
              key={value}
              type="button"
              onClick={() => update({ category: value })}
              className={cn(
                'flex flex-col gap-3 p-5 rounded-xl border-2 text-left transition-all',
                draft.category === value
                  ? 'border-brand-500 bg-brand-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              )}
              aria-pressed={draft.category === value}
            >
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center',
                draft.category === value ? 'bg-brand-100' : 'bg-neutral-100')}>
                <Icon className={cn('w-5 h-5', draft.category === value ? 'text-brand-600' : 'text-neutral-500')} aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{label}</p>
                <p className="text-sm text-neutral-500 mt-0.5">{desc}</p>
                <p className="text-xs text-neutral-400 mt-1">{examples}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Subtype */}
      {draft.category && (
        <div>
          <h2 className="text-base font-semibold text-neutral-900 mb-3">Tipo específico</h2>
          <div className="flex flex-wrap gap-2">
            {subtypes.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  draft.category === 'physical'
                    ? update({ physicalType: value })
                    : update({ onlineType: value })
                }
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium border transition-all',
                  currentSubtype === value
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-brand-300'
                )}
                aria-pressed={currentSubtype === value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode (physical only) */}
      {draft.category === 'physical' && (
        <div>
          <h2 className="text-base font-semibold text-neutral-900 mb-3">Tipo de operación</h2>
          <div className="flex gap-3">
            {modes.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => update({ mode: value })}
                className={cn(
                  'flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all',
                  draft.mode === value
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:border-brand-300'
                )}
                aria-pressed={draft.mode === value}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        disabled={!draft.category}
        onClick={onNext}
        className="w-full py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:pointer-events-none"
      >
        Continuar
      </button>
    </div>
  )
}
