import { getAllAuthors } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = {
  title: 'Authors | My Organization Blog',
}

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Authors</h1>
        <p className="text-lg text-gray-600">Meet the writers behind our content.</p>
      </div>

      {authors.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {author.metadata?.avatar ? (
                  <img
                    src={`${author.metadata.avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
                    alt={author.metadata?.name || author.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xl">
                    {(author.metadata?.name || author.title).charAt(0)}
                  </div>
                )}
                <div>
                  <h2 className="font-bold text-lg text-gray-900 group-hover:text-brand-600 transition-colors">
                    {author.metadata?.name || author.title}
                  </h2>
                </div>
              </div>
              {author.metadata?.bio && (
                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {author.metadata.bio}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No authors yet.</p>
      )}
    </div>
  )
}