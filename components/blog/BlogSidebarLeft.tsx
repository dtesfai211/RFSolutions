"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { sanityClient } from "@/lib/sanity"
import { groq } from "next-sanity"
import { Loader2, Folder } from "lucide-react"
import { motion } from "framer-motion"

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
  const [loading, setLoading] = useState(true)
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
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return (
    <aside className="w-full md:w-64 px-4 md:px-6 py-6 md:sticky md:top-24 border-r border-gray-100 bg-white">
      <h2 className="text-lg font-semibold mb-4 text-riverflow-800">Categories</h2>

      {loading ? (
        <div className="flex items-center space-x-2 text-gray-500 animate-pulse">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading categories...</span>
        </div>
      ) : (
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
        >
          <li>
            <Link
              href="/blog"
              className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                pathname === "/blog"
                  ? "bg-riverflow-100 font-semibold text-riverflow-600"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <span className="flex items-center space-x-2">
                <Folder className="h-4 w-4 text-gray-400" />
                <span>All Posts</span>
              </span>
            </Link>
          </li>

          {categories.map((cat) => (
            <li key={cat._id}>
              <Link
                href={`/blog/category/${cat.slug.current}`}
                className={`flex items-center justify-between px-3 py-2 rounded-md transition-colors ${
                  activeSlug === cat.slug.current
                    ? "bg-riverflow-100 font-semibold text-riverflow-600"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Folder className="h-4 w-4 text-gray-400" />
                  <span>{cat.title}</span>
                </span>
                {typeof cat.count === "number" && (
                  <span className="text-sm text-gray-500">{cat.count}</span>
                )}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </aside>
  )
}
