"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { sanityClient, featuredCategoriesQuery } from "@/lib/sanity"
import { ChevronRight } from "lucide-react"

type Category = {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: {
    asset: { url: string }
    alt?: string
  }
}

interface Props {
  categories: Category[]
}

export default function FeaturedCategories({ categories }: Props) {
  const itemsPerPage = 6
  const totalPages = Math.ceil(categories.length / itemsPerPage)
  const [page, setPage] = useState(1)

  const start = (page - 1) * itemsPerPage
  const paginated = categories.slice(start, start + itemsPerPage)

  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginated.map((cat) => (
          <Link key={cat._id} href={`/blog/category/${cat.slug.current}`}>

            <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-all">
              {cat.mainImage?.asset.url && (
                <Image
                  src={cat.mainImage.asset.url}
                  alt={cat.mainImage.alt || cat.title}
                  width={600}
                  height={400}
                  className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{cat.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
          >
            ← Previous
          </button>
          <span className="px-4 py-2">Page {page} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-md bg-gray-200 disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  )
}
