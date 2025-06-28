"use client"

import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { sanityClient, categoriesWithPostsQuery } from "@/lib/sanity"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogSidebarLeft from "@/components/blog/BlogSidebarLeft"
import BlogSidebarRight from "@/components/blog/BlogSidebarRight"
import FeaturedCategories from "@/components/blog/FeaturedCategories"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

type BlogPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: { asset: { url: string }, alt?: string }
  excerpt?: string
  tags?: { _key: string; title: string }[]
}

type Category = {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: { asset: { url: string }, alt?: string }
  posts: BlogPost[]
}

export default function BlogPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  const [categories, setCategories] = useState<Category[]>([])
  const [visibleCounts, setVisibleCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    sanityClient.fetch(categoriesWithPostsQuery).then((data: Category[]) => {
      setCategories(data)
      const counts: Record<string, number> = {}
      data.forEach(cat => { counts[cat._id] = 3 }) // default 3 posts each
      setVisibleCounts(counts)
    })
  }, [])

  const loadMore = (catId: string) => {
    setVisibleCounts(prev => ({ ...prev, [catId]: prev[catId] + 3 }))
  }

  return (

    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <main className="flex-1 py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 px-4 md:px-6">
          <aside className="hidden lg:block"><BlogSidebarLeft /></aside>

          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">{t("blog.title")}</h1>
              <p className="text-gray-500 md:text-xl">{t("blog.description")}</p>
            </div>

            <FeaturedCategories categories={categories} />

            {categories.length === 0 ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              categories.map((cat) => {
                const visible = visibleCounts[cat._id] || 3
                const hasMore = cat.posts.length > visible
                return (
                  <section key={cat._id} className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
                      {cat.title}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {cat.posts.slice(0, visible).map((post) => (
                        <article key={post._id} className="group relative overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-all">
                          <Link href={`/blog/${post.slug.current}`} className="absolute inset-0 z-10">
                            <span className="sr-only">View Article</span>
                          </Link>

                          <Image
                            src={post.mainImage?.asset.url || "/placeholder.svg"}
                            alt={post.mainImage?.alt || post.title}
                            width={600}
                            height={400}
                            className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                          />

                          <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>~5 min read</span>
                              </div>
                            </div>

                            <h3 className="mt-4 text-xl font-bold">{post.title}</h3>
                            <p className="mt-2 text-gray-500 line-clamp-3">{post.excerpt || ""}</p>

                            {/*  Show tags here */}
                            {post.tags?.map((tag) => {
                              const tagTitle = typeof tag.title === "string" ? tag.title : "tag"
                              return (
                                <Link
                                  key={tag._key}
                                  href={`/blog/tag/${tagTitle.toLowerCase()}`}
                                  className="text-xs bg-riverflow-100 text-riverflow-700 px-2 py-1 rounded hover:underline mr-2"
                                >
                                  #{tagTitle}
                                </Link>
                              )
                            })}

                            <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                              Read More <ChevronRight className="ml-1 h-4 w-4" />
                            </div>
                          </div>
                        </article>

                      ))}
                    </div>

                    {hasMore && (
                      <div className="flex justify-center">
                        <Button variant="outline" onClick={() => loadMore(cat._id)}>
                          {t("blog.loadMore") || "Load more"}
                        </Button>
                      </div>
                    )}
                  </section>
                )
              })
            )}
          </div>

          <aside className="hidden lg:block"><BlogSidebarRight /></aside>
        </div>
      </main>
    </div>
  )
}
