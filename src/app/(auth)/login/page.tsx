'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { FadeInView } from '@/components/animations/motion'
import { LogoMark } from '@/components/ui/Logo'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<'google' | 'apple' | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.error) setError('Correo o contraseña incorrectos.')
    else window.location.href = '/dashboard'
    setLoading(false)
  }

  async function handleSocial(provider: 'google' | 'apple') {
    setSocialLoading(provider)
    await signIn(provider, { callbackUrl: '/dashboard' })
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-neutral-50">
      <FadeInView className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 mb-2">
            <LogoMark size={44} />
            <h1 className="text-xl font-bold text-neutral-900">Bienvenido de vuelta</h1>
            <p className="text-sm text-neutral-500">Inicia sesión en tu cuenta de UrbanFlow AI</p>
          </div>

          {/* Social login */}
          <div className="flex flex-col gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
              loading={socialLoading === 'google'}
              onClick={() => handleSocial('google')}
              aria-label="Continuar con Google"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continuar con Google
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
              loading={socialLoading === 'apple'}
              onClick={() => handleSocial('apple')}
              aria-label="Continuar con Apple"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4zm-3.1-17.6c.06 2.3-1.67 4.2-3.9 4.38-.27-2.23 1.7-4.28 3.9-4.38z" />
              </svg>
              Continuar con Apple
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-neutral-200" />
            </div>
            <div className="relative flex justify-center text-xs text-neutral-500 bg-white px-3">
              o con correo y contraseña
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {error && (
              <p role="alert" className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-brand-600 hover:text-brand-700 transition-colors">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Button type="submit" size="lg" className="w-full" loading={loading}>
              Iniciar sesión
            </Button>
          </form>

          <p className="text-center text-sm text-neutral-500">
            ¿No tienes cuenta?{' '}
            <Link href="/register" className="text-brand-600 font-medium hover:text-brand-700 transition-colors">
              Regístrate gratis
            </Link>
          </p>
        </div>
      </FadeInView>
    </div>
  )
}
