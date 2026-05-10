import { cn } from '@/lib/utils'

type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="10" fill="#0D1117" />
      {/* U — two legs + curved bottom */}
      <path
        d="M6 11 L6 27 C6 36 12 40 19 40 C26 40 32 36 32 27 L32 11"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* F — vertical */}
      <line x1="37" y1="11" x2="37" y2="40" stroke="#3D5A8C" strokeWidth="5" strokeLinecap="round" />
      {/* F — top bar */}
      <line x1="37" y1="11" x2="46" y2="11" stroke="#3D5A8C" strokeWidth="5" strokeLinecap="round" />
      {/* F — middle bar orange */}
      <line x1="37" y1="25" x2="44" y2="25" stroke="#E25500" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

type LogoFullProps = {
  className?: string
  size?: number
}

export function LogoFull({ className, size = 32 }: LogoFullProps) {
  const fontSize = Math.round(size * 0.5)
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <LogoMark size={size} />
      <span className="leading-none font-extrabold tracking-tight" style={{ fontSize }}>
        <span className="text-white">URBAN</span>
        <span className="text-white">FLOW </span>
        <span style={{ color: '#E25500' }}>AI</span>
      </span>
    </span>
  )
}
