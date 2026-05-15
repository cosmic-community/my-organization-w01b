import { getAllCategories } from '@/lib/cosmic'
import Link from 'next/link'

export const metadata = {
  title: 'Categories | My Organization Blog',
}

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Categories</h1>
        <p className="text-lg text-gray-600">Explore content by topic.</p>
      </div>

      {categories.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                {category.metadata?.name || category.title}
              </h2>
              {category.metadata?.description && (
                <p className="text-gray-600 leading-relaxed">
                  {category.metadata.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No categories yet.</p>
      )}
    </div>
  )
}