'use client'

import Input from '@/components/ui/Input'
import type { PublishDraft } from '../PublishFlow'

interface Props {
  draft: PublishDraft
  update: (p: Partial<PublishDraft>) => void
  onNext: () => void
  onBack: () => void
}

export default function StepDetails({ draft, update, onNext, onBack }: Props) {
  const isPhysical = draft.category === 'physical'
  const isValid = draft.title.trim().length > 3 && draft.price.trim().length > 0

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 flex flex-col gap-6">
      <h2 className="text-base font-semibold text-neutral-900">Detalles del anuncio</h2>

      <Input
        label="Título del anuncio"
        placeholder={isPhysical ? 'Ej: Departamento 2 recámaras en Polanco' : 'Ej: SaaS de facturación — $8k MRR'}
        value={draft.title}
        onChange={(e) => update({ title: e.target.value })}
        required
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-neutral-700" htmlFor="description">
          Descripción
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Describe tu anuncio con detalle..."
          value={draft.description}
          onChange={(e) => update({ description: e.target.value })}
          className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
        />
      </div>

      {isPhysical ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Precio (MXN)"
              type="number"
              placeholder="4200000"
              value={draft.price}
              onChange={(e) => update({ price: e.target.value })}
              required
            />
            <Input
              label="Superficie (m²)"
              type="number"
              placeholder="80"
              value={draft.area}
              onChange={(e) => update({ area: e.target.value })}
            />
          </div>
          {draft.physicalType !== 'land' && (
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Recámaras"
                type="number"
                placeholder="2"
                value={draft.bedrooms}
                onChange={(e) => update({ bedrooms: e.target.value })}
              />
              <Input
                label="Baños"
                type="number"
                placeholder="2"
                value={draft.bathrooms}
                onChange={(e) => update({ bathrooms: e.target.value })}
              />
            </div>
          )}
          <Input
            label="Dirección"
            placeholder="Presidente Masaryk 123"
            value={draft.address}
            onChange={(e) => update({ address: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Colonia"
              placeholder="Polanco"
              value={draft.neighborhood}
              onChange={(e) => update({ neighborhood: e.target.value })}
            />
            <Input
              label="Ciudad"
              placeholder="CDMX"
              value={draft.city}
              onChange={(e) => update({ city: e.target.value })}
            />
          </div>
        </>
      ) : (
        <>
          <Input
            label="Precio de venta (MXN)"
            type="number"
            placeholder="960000"
            value={draft.price}
            onChange={(e) => update({ price: e.target.value })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Ingresos mensuales (MXN)"
              type="number"
              placeholder="96000"
              value={draft.monthlyRevenue}
              onChange={(e) => update({ monthlyRevenue: e.target.value })}
            />
            <Input
              label="Beneficio mensual (MXN)"
              type="number"
              placeholder="61000"
              value={draft.monthlyProfit}
              onChange={(e) => update({ monthlyProfit: e.target.value })}
            />
          </div>
          <Input
            label="Stack tecnológico"
            placeholder="Node.js, React, PostgreSQL"
            value={draft.techStack}
            onChange={(e) => update({ techStack: e.target.value })}
            hint="Separado por comas"
          />
          <Input
            label="Motivo de venta"
            placeholder="Me enfoco en otro proyecto..."
            value={draft.reasonForSelling}
            onChange={(e) => update({ reasonForSelling: e.target.value })}
          />
        </>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors"
        >
          Atrás
        </button>
        <button
          type="button"
          disabled={!isValid}
          onClick={onNext}
          className="flex-1 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:pointer-events-none"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
