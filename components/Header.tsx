import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
              My Organization
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Posts
            </Link>
            <Link href="/authors" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Authors
            </Link>
            <Link href="/categories" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">
              Categories
            </Link>
          </nav>

          <nav className="md:hidden flex items-center gap-4">
            <Link href="/posts" className="text-sm font-medium text-gray-700">Posts</Link>
            <Link href="/categories" className="text-sm font-medium text-gray-700">Topics</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}