'use client'

import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { Send, CheckCircle } from 'lucide-react'

const topics = [
  'Soporte técnico',
  'Ventas y planes',
  'Programa de brokers',
  'Publicar una propiedad',
  'Otro',
]

export default function ContactForm() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [topic, setTopic]     = useState(topics[0])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, topic, message }),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setSent(true)
    } catch {
      setError('No se pudo enviar el mensaje. Intenta de nuevo o escríbenos directamente a hola@urbanflow.mx')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-10 flex flex-col items-center justify-center gap-4 text-center h-full min-h-[360px]">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-green-600" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-neutral-900">¡Mensaje enviado!</h2>
        <p className="text-sm text-neutral-500 max-w-xs">
          Te responderemos en menos de 24 horas hábiles. Revisa tu bandeja de entrada.
        </p>
        <button
          type="button"
          onClick={() => { setSent(false); setName(''); setEmail(''); setMessage('') }}
          className="text-sm text-brand-600 hover:text-brand-700 transition-colors font-medium"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8">
      <h2 className="text-lg font-bold text-neutral-900 mb-6">Envíanos un mensaje</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {error && (
          <p role="alert" className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Tu nombre"
            type="text"
            placeholder="Ana García"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="topic" className="text-sm font-medium text-neutral-700">
            Tema
          </label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
          >
            {topics.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-neutral-700">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="¿En qué podemos ayudarte?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="w-full" loading={loading}>
          <Send className="w-4 h-4" aria-hidden="true" />
          Enviar mensaje
        </Button>
      </form>
    </div>
  )
}
