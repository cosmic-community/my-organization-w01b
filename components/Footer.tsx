import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-lg text-white">My Organization</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sharing insights, stories, and updates from our team.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/posts" className="hover:text-white transition-colors">All Posts</Link></li>
              <li><Link href="/authors" className="hover:text-white transition-colors">Authors</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Built with Next.js and Cosmic CMS.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500">
          © {year} My Organization. All rights reserved.
        </div>
      </div>
    </footer>
  )
}