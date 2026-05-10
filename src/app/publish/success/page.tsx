import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { FadeInView } from '@/components/animations/motion'

export const metadata = { title: 'Publicación exitosa — UrbanFlow' }

export default function PublishSuccessPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-neutral-50">
      <FadeInView className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-lg p-10 flex flex-col items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-green-600" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-neutral-900 mb-2">¡Publicación exitosa!</h1>
            <p className="text-neutral-500">
              Tu anuncio está activo. Aparecerá en el mapa y en los resultados de búsqueda en los próximos minutos.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Link
              href="/listings"
              className="flex-1 inline-flex items-center justify-center py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors"
            >
              Ver mis anuncios
            </Link>
            <Link
              href="/properties"
              className="flex-1 inline-flex items-center justify-center py-3 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors"
            >
              Explorar mapa
            </Link>
          </div>
        </div>
      </FadeInView>
    </div>
  )
}
