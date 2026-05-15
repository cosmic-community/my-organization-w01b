// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)

  return (
    <div>
      {/* Author Header */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            {author.metadata?.avatar ? (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                alt={author.metadata?.name || author.title}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-white shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-4xl ring-4 ring-white shadow-lg">
                {(author.metadata?.name || author.title).charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {author.metadata?.name || author.title}
              </h1>
              {author.metadata?.bio && (
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  {author.metadata.bio}
                </p>
              )}
              {author.metadata?.email && (
                <a
                  href={`mailto:${author.metadata.email}`}
                  className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium text-sm"
                >
                  {author.metadata.email}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Articles by {author.metadata?.name || author.title}
        </h2>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts from this author yet.</p>
        )}

        <div className="mt-12">
          <Link href="/authors" className="text-brand-600 hover:text-brand-700 font-medium">
            ← Back to all authors
          </Link>
        </div>
      </section>
    </div>
  )
}