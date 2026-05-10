'use client'

import { useState } from 'react'
import { Check, Zap, Star, Crown } from 'lucide-react'
import { LISTING_FEES } from '@/types/listing'
import type { ListingPlan } from '@/types/listing'
import type { PublishDraft } from '../PublishFlow'
import { cn, formatCurrency } from '@/lib/utils'

const planIcons = { basic: Zap, featured: Star, premium: Crown }

interface Props {
  draft: PublishDraft
  onBack: () => void
}

export default function StepPayment({ draft, onBack }: Props) {
  const [selected, setSelected] = useState<ListingPlan>('featured')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCheckout() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/listing-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selected,
          listingTitle: draft.title,
          draftId: `draft_${Date.now()}`,
        }),
      })
      const data = await res.json() as { url?: string; error?: string }
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Error al procesar')
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
        <h2 className="text-base font-semibold text-neutral-900 mb-1">Resumen del anuncio</h2>
        <p className="text-sm text-neutral-600">
          <span className="font-medium">{draft.title}</span>
          {' · '}
          {draft.category === 'physical' ? 'Inmueble' : 'Negocio digital'}
          {' · '}
          {draft.mode === 'sale' ? 'Venta' : 'Renta'}
        </p>
        {draft.price && (
          <p className="text-sm text-brand-600 font-semibold mt-1">
            Precio: {formatCurrency(Number(draft.price))}
          </p>
        )}
      </div>

      <div>
        <h2 className="text-base font-semibold text-neutral-900 mb-4">Elige tu plan de publicación</h2>
        <div className="flex flex-col gap-3">
          {LISTING_FEES.map((fee) => {
            const Icon = planIcons[fee.plan]
            const active = selected === fee.plan
            return (
              <button
                key={fee.plan}
                type="button"
                onClick={() => setSelected(fee.plan)}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all w-full',
                  active ? 'border-brand-500 bg-brand-50' : 'border-neutral-200 hover:border-neutral-300 bg-white'
                )}
                aria-pressed={active}
              >
                <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                  active ? 'bg-brand-100' : 'bg-neutral-100')}>
                  <Icon className={cn('w-5 h-5', active ? 'text-brand-600' : 'text-neutral-500')} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-neutral-900">{fee.label}</p>
                    <p className="font-bold text-brand-600">{formatCurrency(fee.price)}</p>
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5">{fee.durationDays} días activo</p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {fee.features.map((f) => (
                      <li key={f} className="flex items-center gap-1 text-xs text-neutral-600">
                        <Check className="w-3 h-3 text-brand-500 shrink-0" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3" role="alert">
          {error}
        </p>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors"
          disabled={loading}
        >
          Atrás
        </button>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="flex-1 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
              </svg>
              Redirigiendo a Stripe...
            </>
          ) : (
            'Pagar y publicar'
          )}
        </button>
      </div>

      <p className="text-center text-xs text-neutral-400">
        Pago seguro procesado por Stripe. No almacenamos datos de tarjeta.
      </p>
    </div>
  )
}
