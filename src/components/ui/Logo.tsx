import { cn } from '@/lib/utils'

type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="18" fill="#0D1117" />

      {/* U — white thick strokes, rounded */}
      <path
        d="M14 14 L14 60 Q14 86 38 86 Q62 86 62 60 L62 14"
        stroke="white"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* F — vertical bar, slate blue */}
      <line x1="76" y1="14" x2="76" y2="86" stroke="#3D5A8C" strokeWidth="13" strokeLinecap="round" />
      {/* F — top bar, slate blue */}
      <line x1="76" y1="14" x2="94" y2="14" stroke="#3D5A8C" strokeWidth="13" strokeLinecap="round" />
      {/* F — middle bar, Energy Orange */}
      <line x1="76" y1="50" x2="91" y2="50" stroke="#E25500" strokeWidth="13" strokeLinecap="round" />
    </svg>
  )
}

type LogoFullProps = {
  className?: string
  size?: number
}

export function LogoFull({ className, size = 40 }: LogoFullProps) {
  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark size={size} />
      <span className="leading-none flex flex-col" style={{ gap: 1 }}>
        <span
          className="font-extrabold tracking-widest uppercase"
          style={{ fontSize: size * 0.38, color: 'white', letterSpacing: '0.12em', lineHeight: 1.1 }}
        >
          URBAN FLOW <span style={{ color: '#E25500' }}>AI</span>
        </span>
        <span
          className="font-medium tracking-widest uppercase"
          style={{ fontSize: size * 0.16, color: '#3D5A8C', letterSpacing: '0.2em', lineHeight: 1 }}
        >
          WHERE BUSINESSES BELONG
        </span>
      </span>
    </span>
  )
}
