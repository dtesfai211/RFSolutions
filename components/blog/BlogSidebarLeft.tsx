// components/blog/BlogSidebarLeft.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { sanityClient } from "@/lib/sanity"
import { groq } from "next-sanity"

type Category = {
  _id: string
  title: string
  slug: {
    current: string
  }
  count?: number
}

export default function BlogSidebarLeft() {
  const [categories, setCategories] = useState<Category[]>([])
  const pathname = usePathname()
  const activeSlug = pathname?.split("/blog/category/")[1]

  useEffect(() => {
    sanityClient
      .fetch(groq`
        *[_type == "category"]{
          _id,
          title,
          slug,
          "count": count(*[_type=='post' && references(^._id)])
        } | order(title asc)
      `)
      .then(setCategories)
  }, [])

  return (
    <aside className="w-full md:w-64 px-4 md:px-6 py-6 md:sticky md:top-24 border-r border-gray-100">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat._id}>
            <Link
              href={`/blog/category/${cat.slug.current}`}
              className={`flex justify-between px-3 py-2 rounded-md transition-colors ${
                activeSlug === cat.slug.current
                  ? "bg-riverflow-100 font-semibold text-riverflow-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span>{cat.title}</span>
              {typeof cat.count === "number" && (
                <span className="text-sm text-gray-500">{cat.count}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
