// app/posts/[slug]/page.tsx
import { getPostBySlug } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const author = post.metadata?.author
  const categories = post.metadata?.categories || []
  const featuredImage = post.metadata?.featured_image

  return (
    <article className="bg-white">
      {/* Hero Image */}
      {featuredImage && (
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress`}
            alt={post.metadata?.title || post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="text-xs font-medium px-3 py-1 rounded-full bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
              >
                {cat.metadata?.name || cat.title}
              </Link>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          {post.metadata?.title || post.title}
        </h1>

        {/* Excerpt */}
        {post.metadata?.excerpt && (
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.metadata.excerpt}
          </p>
        )}

        {/* Author */}
        {author && (
          <Link href={`/authors/${author.slug}`} className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 group">
            {author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={author.metadata?.name || author.title}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
                {author.metadata?.name || author.title}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(post.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </Link>
        )}

        {/* Content */}
        {post.metadata?.content && (
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-brand-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.metadata.content }}
          />
        )}

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/posts" className="inline-flex items-center text-brand-600 hover:text-brand-700 font-medium">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </article>
  )
}