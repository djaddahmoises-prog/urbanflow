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
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="#0c1a2e" />
      {/* U shape */}
      <path
        d="M7 10 L7 24 Q7 33 16 33 Q25 33 25 24 L25 10"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* F vertical */}
      <line x1="29" y1="10" x2="29" y2="33" stroke="#1a3f9e" strokeWidth="4" strokeLinecap="round" />
      {/* F top bar */}
      <line x1="29" y1="10" x2="37" y2="10" stroke="#1a3f9e" strokeWidth="4" strokeLinecap="round" />
      {/* F middle bar — orange accent */}
      <line x1="29" y1="21" x2="36" y2="21" stroke="#e8650a" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

type LogoFullProps = {
  className?: string
  size?: number
}

export function LogoFull({ className, size = 32 }: LogoFullProps) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <LogoMark size={size} />
      <span className="font-extrabold text-lg tracking-tight leading-none">
        Urban<span style={{ color: '#e8650a' }}>Flow</span>
        <span className="text-xs font-semibold ml-1 text-neutral-400 align-middle">AI</span>
      </span>
    </span>
  )
}
