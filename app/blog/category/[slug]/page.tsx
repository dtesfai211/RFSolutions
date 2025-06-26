import { sanityClient, categoryPostsQuery } from "@/lib/sanity"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Params = {
  params: { slug: string }
}

export default async function BlogCategoryPage({ params }: Params) {
  const category = await sanityClient.fetch(categoryPostsQuery, { slug: params.slug })

  if (!category) return notFound()

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-2">{category.title}</h1>
      <p className="text-gray-500 mb-8">{category.description}</p>

      {category.posts.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {category.posts.map((post: any) => (
            <article
              key={post._id}
              className="group relative overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-all"
            >
              <Link href={`/blog/${post.slug.current}`} className="absolute inset-0 z-10">
                <span className="sr-only">View Article</span>
              </Link>

              {post.mainImage?.asset?.url && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                />
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </div>
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-gray-500 line-clamp-3">{post.excerpt || ""}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-12 flex justify-center">
        <Button asChild className="rounded-full">
          <Link href="/blog">Back to All Blogs</Link>
        </Button>
      </div>
    </div>
  )
}
