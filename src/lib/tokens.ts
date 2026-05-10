export const colors = {
  brand: {
    50:  '#f0f5ff',
    100: '#dce8fd',
    200: '#b9d1fb',
    300: '#85aaf4',
    400: '#527ce8',
    500: '#2c58d4',
    600: '#1a3f9e',
    700: '#16348a',
    800: '#0f2466',
    900: '#0a1847',
    950: '#0c1a2e',
  },
  accent: {
    50:  '#fff5ed',
    100: '#ffe8d0',
    200: '#ffc99d',
    300: '#ffa066',
    400: '#f87333',
    500: '#e8650a',
    600: '#cc570a',
    700: '#a3420b',
    800: '#7d3210',
    900: '#5c2510',
  },
  neutral: {
    0:   '#ffffff',
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  success: { 500: '#22c55e', 600: '#16a34a' },
  warning: { 500: '#f59e0b', 600: '#d97706' },
  error:   { 500: '#ef4444', 600: '#dc2626' },
} as const

export const fonts = {
  heading: "'Inter', 'system-ui', sans-serif",
  body:    "'Inter', 'system-ui', sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', monospace",
} as const

export const fontSizes = {
  xs:   '0.75rem',
  sm:   '0.875rem',
  base: '1rem',
  lg:   '1.125rem',
  xl:   '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
} as const

export const fontWeights = {
  normal:   400,
  medium:   500,
  semibold: 600,
  bold:     700,
  extrabold: 800,
} as const

export const spacing = {
  1:  '0.25rem',
  2:  '0.5rem',
  3:  '0.75rem',
  4:  '1rem',
  5:  '1.25rem',
  6:  '1.5rem',
  8:  '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const

export const radii = {
  sm:   '0.375rem',
  md:   '0.5rem',
  lg:   '0.75rem',
  xl:   '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const

export const shadows = {
  sm:  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md:  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg:  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl:  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  brand: '0 0 0 3px rgb(26 63 158 / 0.3)',
} as const

export const zIndex = {
  base:    0,
  raised:  10,
  overlay: 40,
  modal:   50,
  toast:   60,
  tooltip: 70,
} as const

export const animation = {
  entranceDuration: 0.7,
  entranceEase: [0.25, 0.46, 0.45, 0.94] as number[],
  staggerDelay: 0.09,
  hoverSpring: { type: 'spring', stiffness: 300, damping: 22 },
  buttonSpring: { type: 'spring', stiffness: 400, damping: 20 },
  conditionalEnter: { duration: 0.3 },
  conditionalExit:  { duration: 0.2 },
} as const
