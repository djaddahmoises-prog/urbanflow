'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, Building2, Globe, BarChart3, Activity } from 'lucide-react'
import { FadeInView, StaggerList, StaggerItem } from '@/components/animations/motion'
import { ZONE_DATA, PRICE_HISTORY, ONLINE_MARKET } from '@/lib/market-data'
import { formatCurrency, cn } from '@/lib/utils'
import PriceChart from './PriceChart'

type Tab = 'physical' | 'online'

const demandColors = {
  alta:  'bg-green-100 text-green-700',
  media: 'bg-amber-100 text-amber-700',
  baja:  'bg-neutral-100 text-neutral-600',
}

export default function MarketDashboard() {
  const [tab, setTab] = useState<Tab>('physical')

  const topZone  = [...ZONE_DATA].sort((a, b) => b.changeMonth - a.changeMonth)[0]
  const totalListings = ZONE_DATA.reduce((s, z) => s + z.totalListings, 0)
  const avgPrice = Math.round(ZONE_DATA.reduce((s, z) => s + z.pricePerSqm, 0) / ZONE_DATA.length)

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-neutral-50 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <FadeInView>
          <h1 className="text-2xl font-extrabold text-neutral-900">Estudio de Mercado</h1>
          <p className="text-neutral-500 mt-1">Datos en tiempo real del mercado inmobiliario y de activos digitales.</p>
        </FadeInView>

        {/* KPIs */}
        <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Propiedades activas',    value: totalListings.toString(),          icon: Building2, color: 'text-brand-600' },
            { label: 'Precio promedio/m²',      value: formatCurrency(avgPrice),          icon: BarChart3, color: 'text-brand-600' },
            { label: 'Zona más caliente',       value: topZone.zone,                      icon: TrendingUp, color: 'text-green-600' },
            { label: 'Crecimiento mensual top', value: `+${topZone.changeMonth}%`,        icon: Activity, color: 'text-green-600' },
          ].map(({ label, value, icon: Icon, color }) => (
            <StaggerItem key={label}>
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-neutral-500">{label}</p>
                  <Icon className={cn('w-4 h-4', color)} aria-hidden="true" />
                </div>
                <p className="text-xl font-extrabold text-neutral-900">{value}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>

        {/* Tab switcher */}
        <FadeInView>
          <div className="flex gap-2 p-1 bg-neutral-200 rounded-xl w-fit" role="group" aria-label="Tipo de mercado">
            {([['physical', Building2, 'Mercado físico'], ['online', Globe, 'Activos digitales']] as [Tab, typeof Building2, string][]).map(
              ([value, Icon, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTab(value)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all',
                    tab === value ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'
                  )}
                  aria-pressed={tab === value}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </button>
              )
            )}
          </div>
        </FadeInView>

        {/* Physical market */}
        {tab === 'physical' && (
          <>
            {/* Price chart */}
            <FadeInView>
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
                <h2 className="text-base font-bold text-neutral-900 mb-1">Precio por m² — últimos 7 meses</h2>
                <p className="text-sm text-neutral-500 mb-6">CDMX · Zonas principales</p>
                <PriceChart data={PRICE_HISTORY} />
              </div>
            </FadeInView>

            {/* Zone table */}
            <FadeInView>
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-neutral-100">
                  <h2 className="text-base font-bold text-neutral-900">Precios por zona</h2>
                  <p className="text-sm text-neutral-500">Promedio de precio por m² y tendencias</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" aria-label="Precios por zona">
                    <thead>
                      <tr className="border-b border-neutral-100 text-left">
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">Zona</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">Precio/m²</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">1 mes</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">12 meses</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">Días prom.</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">Demanda</th>
                        <th className="px-6 py-3 font-semibold text-neutral-500 text-xs uppercase tracking-wide">Anuncios</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {ZONE_DATA.map((z) => (
                        <tr key={z.zone} className="hover:bg-neutral-50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-neutral-900">{z.zone}</td>
                          <td className="px-6 py-4 font-bold text-brand-600">{formatCurrency(z.pricePerSqm)}</td>
                          <td className="px-6 py-4">
                            <span className={cn('flex items-center gap-1 font-semibold text-xs', z.changeMonth >= 0 ? 'text-green-600' : 'text-red-600')}>
                              {z.changeMonth >= 0
                                ? <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                                : <TrendingDown className="w-3.5 h-3.5" aria-hidden="true" />}
                              {z.changeMonth > 0 ? '+' : ''}{z.changeMonth}%
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={cn('font-semibold text-xs', z.changeYear >= 0 ? 'text-green-600' : 'text-red-600')}>
                              {z.changeYear > 0 ? '+' : ''}{z.changeYear}%
                            </span>
                          </td>
                          <td className="px-6 py-4 text-neutral-600">{z.avgDaysOnMarket} días</td>
                          <td className="px-6 py-4">
                            <span className={cn('text-xs font-semibold px-2 py-1 rounded-full capitalize', demandColors[z.demand])}>
                              {z.demand}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-neutral-600">{z.totalListings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeInView>
          </>
        )}

        {/* Online / digital market */}
        {tab === 'online' && (
          <StaggerList className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ONLINE_MARKET.map((m) => (
              <StaggerItem key={m.type}>
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-neutral-900">{m.type}</h3>
                    <Globe className="w-4 h-4 text-amber-500" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Múltiplo prom.</p>
                      <p className="text-lg font-extrabold text-brand-600">{m.avgMultiple}x</p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Ing. mensual prom.</p>
                      <p className="text-sm font-bold text-neutral-900">{formatCurrency(m.avgMonthlyRevenue)}</p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Anuncios activos</p>
                      <p className="text-lg font-extrabold text-neutral-900">{m.totalListings}</p>
                    </div>
                    <div className="bg-neutral-50 rounded-xl p-3">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Días hasta venta</p>
                      <p className="text-lg font-extrabold text-neutral-900">{m.avgDaysToSell}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerList>
        )}
      </div>
    </div>
  )
}
