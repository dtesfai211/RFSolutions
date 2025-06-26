"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { sanityClient, featuredCategoriesQuery } from "@/lib/sanity"
import { ChevronRight } from "lucide-react"

type Category = {
  _id: string
  title: string
  slug: { current: string }
  description?: string
}

export default function FeaturedCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    sanityClient.fetch(featuredCategoriesQuery).then(setCategories)
  }, [])

  if (categories.length === 0) return null

  return (
    <section className="bg-white py-12 md:py-16 border-t border-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/blog/category/${cat.slug.current}`}
              className="block p-6 border rounded-lg hover:shadow-md transition-all bg-gray-50"
            >
              <h3 className="text-lg font-semibold text-riverflow-700 mb-2">{cat.title}</h3>
              {cat.description && (
                <p className="text-sm text-gray-600 line-clamp-3">{cat.description}</p>
              )}
              <div className="mt-4 text-amber-600 font-medium flex items-center text-sm">
                Explore <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
