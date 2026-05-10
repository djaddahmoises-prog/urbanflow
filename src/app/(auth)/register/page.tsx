'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { FadeInView } from '@/components/animations/motion'
import { cn } from '@/lib/utils'

type Role = 'buyer' | 'broker' | 'investor'

const roles: { value: Role; label: string; desc: string }[] = [
  { value: 'buyer',    label: 'Comprador',  desc: 'Busco mi primera vivienda o propiedad de uso personal.' },
  { value: 'investor', label: 'Inversionista', desc: 'Busco propiedades para invertir y generar rendimientos.' },
  { value: 'broker',   label: 'Broker',     desc: 'Soy agente o tengo una agencia inmobiliaria.' },
]

export default function RegisterPage() {
  const [role, setRole] = useState<Role>('buyer')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-neutral-50">
      <FadeInView className="w-full max-w-lg">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-xl font-bold text-neutral-900">Crear tu cuenta</h1>
            <p className="text-sm text-neutral-500">Gratis para siempre en el plan Explorador</p>
          </div>

          {/* Role selector */}
          <div>
            <p className="text-sm font-medium text-neutral-700 mb-3">¿Cómo usarás UrbanFlow?</p>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Tipo de usuario">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  role="radio"
                  aria-checked={role === r.value}
                  onClick={() => setRole(r.value)}
                  className={cn(
                    'flex flex-col gap-1 p-3 rounded-xl border text-left transition-all text-xs',
                    role === r.value
                      ? 'border-brand-500 bg-brand-50 text-brand-700'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  )}
                >
                  <span className="font-semibold">{r.label}</span>
                  <span className="opacity-70 leading-relaxed">{r.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="grid grid-cols-2 gap-4">
              <Input label="Nombre" type="text" placeholder="Ana" autoComplete="given-name" required />
              <Input label="Apellido" type="text" placeholder="García" autoComplete="family-name" required />
            </div>
            <Input label="Correo electrónico" type="email" placeholder="tu@email.com" autoComplete="email" required />
            <Input
              label="Contraseña"
              type="password"
              placeholder="Mínimo 8 caracteres"
              autoComplete="new-password"
              hint="Usa letras, números y símbolos para mayor seguridad."
              required
            />
            <Button type="submit" size="lg" className="w-full" loading={loading}>
              Crear cuenta gratis
            </Button>
          </form>

          <p className="text-center text-xs text-neutral-400">
            Al registrarte aceptas los{' '}
            <Link href="/terms" className="text-brand-600 hover:underline">Términos de Servicio</Link>
            {' '}y la{' '}
            <Link href="/privacy" className="text-brand-600 hover:underline">Política de Privacidad</Link>.
          </p>

          <p className="text-center text-sm text-neutral-500">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-brand-600 font-medium hover:text-brand-700 transition-colors">
              Inicia sesión
            </Link>
          </p>
        </div>
      </FadeInView>
    </div>
  )
}
