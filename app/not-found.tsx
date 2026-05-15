import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the page you're looking for.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}