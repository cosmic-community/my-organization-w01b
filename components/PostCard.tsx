import Link from 'next/link'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const categories = post.metadata?.categories || []

  return (
    <article className="group">
      <Link href={`/posts/${post.slug}`} className="block">
        {featuredImage && (
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 mb-4">
            <img
              src={`${featuredImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
              alt={post.metadata?.title || post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.slice(0, 2).map((cat) => (
              <span key={cat.id} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700">
                {cat.metadata?.name || cat.title}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors leading-snug">
          {post.metadata?.title || post.title}
        </h3>

        {post.metadata?.excerpt && (
          <p className="text-gray-600 line-clamp-2 mb-4 leading-relaxed">
            {post.metadata.excerpt}
          </p>
        )}

        {author && (
          <div className="flex items-center gap-2 text-sm">
            {author.metadata?.avatar && (
              <img
                src={`${author.metadata.avatar.imgix_url}?w=60&h=60&fit=crop&auto=format,compress`}
                alt={author.metadata?.name || author.title}
                className="w-7 h-7 rounded-full object-cover"
              />
            )}
            <span className="font-medium text-gray-900">
              {author.metadata?.name || author.title}
            </span>
          </div>
        )}
      </Link>
    </article>
  )
}