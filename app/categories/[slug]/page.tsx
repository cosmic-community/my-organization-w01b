// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-brand-600 font-medium text-sm uppercase tracking-wider mb-3">Category</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.metadata?.name || category.title}
          </h1>
          {category.metadata?.description && (
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {category.metadata.description}
            </p>
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
        </h2>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts in this category yet.</p>
        )}

        <div className="mt-12">
          <Link href="/categories" className="text-brand-600 hover:text-brand-700 font-medium">
            ← Back to all categories
          </Link>
        </div>
      </section>
    </div>
  )
}