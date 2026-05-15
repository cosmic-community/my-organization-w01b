import { getAllPosts, getAllCategories } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium text-sm uppercase tracking-wider mb-4">My Organization Blog</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Insights, stories, and updates
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover the latest thinking, news, and perspectives from our team. Dive deep into the topics that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-500">Browse by topic:</span>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-brand-100 hover:text-brand-700 transition-colors"
                >
                  {category.metadata?.name || category.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Post */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-6">Featured</h2>
          <Link href={`/posts/${featuredPost.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {featuredPost.metadata?.featured_image && (
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={`${featuredPost.metadata.featured_image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                    alt={featuredPost.metadata?.title || featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                {featuredPost.metadata?.categories && featuredPost.metadata.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.metadata.categories.map((cat) => (
                      <span key={cat.id} className="text-xs font-medium px-3 py-1 rounded-full bg-brand-50 text-brand-700">
                        {cat.metadata?.name || cat.title}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors leading-tight">
                  {featuredPost.metadata?.title || featuredPost.title}
                </h3>
                {featuredPost.metadata?.excerpt && (
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.metadata.excerpt}
                  </p>
                )}
                {featuredPost.metadata?.author && (
                  <div className="flex items-center gap-3">
                    {featuredPost.metadata.author.metadata?.avatar && (
                      <img
                        src={`${featuredPost.metadata.author.metadata.avatar.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                        alt={featuredPost.metadata.author.metadata?.name || featuredPost.metadata.author.title}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <span className="text-sm font-medium text-gray-900">
                      {featuredPost.metadata.author.metadata?.name || featuredPost.metadata.author.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
        {remainingPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          posts.length === 0 && (
            <p className="text-gray-500">No posts yet. Check back soon!</p>
          )
        )}
      </section>
    </div>
  )
}