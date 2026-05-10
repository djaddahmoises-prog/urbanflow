'use client'

import type { PriceHistory } from '@/lib/market-data'
import { formatCurrency } from '@/lib/utils'

const SERIES = [
  { key: 'polanco' as const, label: 'Polanco',   color: '#4f52e7' },
  { key: 'santafe' as const, label: 'Santa Fe',  color: '#f59e0b' },
  { key: 'condesa' as const, label: 'Condesa',   color: '#22c55e' },
  { key: 'reforma' as const, label: 'Reforma',   color: '#a855f7' },
]

const W = 700
const H = 220
const PAD = { top: 16, right: 16, bottom: 36, left: 64 }
const chartW = W - PAD.left - PAD.right
const chartH = H - PAD.top - PAD.bottom

export default function PriceChart({ data }: { data: PriceHistory[] }) {
  const allValues = data.flatMap((d) => SERIES.map((s) => d[s.key]))
  const minV = Math.min(...allValues) * 0.92
  const maxV = Math.max(...allValues) * 1.04

  const toX = (i: number) => PAD.left + (i / (data.length - 1)) * chartW
  const toY = (v: number) => PAD.top + chartH - ((v - minV) / (maxV - minV)) * chartH

  const yTicks = Array.from({ length: 5 }, (_, i) => minV + (i / 4) * (maxV - minV))

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4" role="list" aria-label="Leyenda">
        {SERIES.map((s) => (
          <div key={s.key} className="flex items-center gap-1.5 text-xs text-neutral-600" role="listitem">
            <span className="w-3 h-3 rounded-full" style={{ background: s.color }} aria-hidden="true" />
            {s.label}
          </div>
        ))}
      </div>

      {/* SVG Chart */}
      <div className="w-full overflow-x-auto" role="img" aria-label="Gráfica de precios por zona">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ minWidth: 320 }}
          aria-hidden="true"
        >
          {/* Y grid + ticks */}
          {yTicks.map((v) => {
            const y = toY(v)
            return (
              <g key={v}>
                <line x1={PAD.left} x2={W - PAD.right} y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                <text x={PAD.left - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#94a3b8">
                  ${Math.round(v / 1000)}k
                </text>
              </g>
            )
          })}

          {/* X labels */}
          {data.map((d, i) => (
            <text key={d.month} x={toX(i)} y={H - 8} textAnchor="middle" fontSize="11" fill="#94a3b8">
              {d.month}
            </text>
          ))}

          {/* Lines + dots */}
          {SERIES.map((s) => {
            const points = data.map((d, i) => `${toX(i)},${toY(d[s.key])}`)
            return (
              <g key={s.key}>
                <polyline
                  points={points.join(' ')}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {data.map((d, i) => (
                  <circle key={i} cx={toX(i)} cy={toY(d[s.key])} r="3.5" fill={s.color} />
                ))}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Latest values table */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {SERIES.map((s) => {
          const last = data[data.length - 1][s.key]
          const prev = data[data.length - 2][s.key]
          const pct = (((last - prev) / prev) * 100).toFixed(1)
          return (
            <div key={s.key} className="bg-neutral-50 rounded-xl p-3 border border-neutral-100">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} aria-hidden="true" />
                <span className="text-xs text-neutral-500">{s.label}</span>
              </div>
              <p className="text-sm font-bold text-neutral-900">{formatCurrency(last)}/m²</p>
              <p className="text-xs text-green-600 font-medium">+{pct}% este mes</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
