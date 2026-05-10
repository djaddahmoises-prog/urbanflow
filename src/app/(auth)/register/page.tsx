'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth, googleProvider, appleProvider } from '@/lib/firebase'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { FadeInView } from '@/components/animations/motion'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/ui/Logo'

type Role = 'buyer' | 'broker' | 'investor'

const roles: { value: Role; label: string; desc: string }[] = [
  { value: 'buyer',    label: 'Comprador',     desc: 'Busco mi primera vivienda o propiedad de uso personal.' },
  { value: 'investor', label: 'Inversionista', desc: 'Busco propiedades para invertir y generar rendimientos.' },
  { value: 'broker',   label: 'Broker',        desc: 'Soy agente o tengo una agencia inmobiliaria.' },
]

export default function RegisterPage() {
  const router = useRouter()
  const [role, setRole]           = useState<Role>('buyer')
  const [name, setName]           = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [loading, setLoading]     = useState(false)
  const [socialLoading, setSocialLoading] = useState<'google' | 'apple' | null>(null)
  const [error, setError]         = useState('')

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(cred.user, { displayName: `${name} ${lastName}`.trim() })
      router.push('/dashboard')
    } catch (err: unknown) {
      const code = (err as { code?: string }).code
      if (code === 'auth/email-already-in-use') setError('Este correo ya está registrado.')
      else if (code === 'auth/weak-password')   setError('La contraseña debe tener al menos 6 caracteres.')
      else setError('No se pudo crear la cuenta. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setSocialLoading('google')
    setError('')
    try {
      await signInWithPopup(auth, googleProvider)
      router.push('/dashboard')
    } catch {
      setError('No se pudo continuar con Google.')
    } finally {
      setSocialLoading(null)
    }
  }

  async function handleApple() {
    setSocialLoading('apple')
    setError('')
    try {
      await signInWithPopup(auth, appleProvider)
      router.push('/dashboard')
    } catch {
      setError('No se pudo continuar con Apple.')
    } finally {
      setSocialLoading(null)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-neutral-50">
      <FadeInView className="w-full max-w-lg">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-8 flex flex-col gap-6">

          <div className="flex flex-col items-center gap-2 mb-2">
            <LogoMark size={44} />
            <h1 className="text-xl font-bold text-neutral-900">Crear tu cuenta</h1>
            <p className="text-sm text-neutral-500">Gratis para siempre en el plan Explorador</p>
          </div>

          {/* Role selector */}
          <div>
            <p className="text-sm font-medium text-neutral-700 mb-3">¿Cómo usarás UrbanFlow?</p>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Tipo de usuario">
              {roles.map((r) => (
                <button
                  key={r.value} type="button" role="radio"
                  aria-checked={role === r.value} onClick={() => setRole(r.value)}
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

          {/* Social signup */}
          <div className="flex flex-col gap-3">
            <Button
              type="button" variant="outline" size="lg" className="w-full"
              loading={socialLoading === 'google'} onClick={handleGoogle}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Registrarse con Google
            </Button>
            <Button
              type="button" variant="outline" size="lg" className="w-full"
              loading={socialLoading === 'apple'} onClick={handleApple}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4zm-3.1-17.6c.06 2.3-1.67 4.2-3.9 4.38-.27-2.23 1.7-4.28 3.9-4.38z"/>
              </svg>
              Registrarse con Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <div className="relative flex justify-center text-xs text-neutral-500 bg-white px-3">
              o con correo electrónico
            </div>
          </div>

          <form onSubmit={handleEmail} className="flex flex-col gap-4" noValidate>
            {error && (
              <p role="alert" className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <div className="grid grid-cols-2 gap-4">
              <Input label="Nombre"   type="text" placeholder="Ana"    autoComplete="given-name"   value={name}     onChange={(e) => setName(e.target.value)}     required />
              <Input label="Apellido" type="text" placeholder="García" autoComplete="family-name"  value={lastName} onChange={(e) => setLastName(e.target.value) } required />
            </div>
            <Input label="Correo electrónico" type="email"    placeholder="tu@email.com"         autoComplete="email"        value={email}    onChange={(e) => setEmail(e.target.value)}    required />
            <Input label="Contraseña"         type="password" placeholder="Mínimo 6 caracteres"  autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} hint="Usa letras, números y símbolos para mayor seguridad." required />
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
