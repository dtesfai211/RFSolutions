import { sanityClient } from "@/lib/sanity"
import { postsByTagQuery } from "@/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar } from "lucide-react"
import { PortableText } from "@portabletext/react"

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await sanityClient.fetch(postsByTagQuery(params.tag))

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Posts tagged with “{params.tag}”</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <article key={post._id} className="border rounded-md shadow hover:shadow-lg overflow-hidden">
            <Link href={`/blog/${post.slug.current}`} className="block">
              <Image
                src={post.mainImage?.asset?.url || "/placeholder.svg"}
                alt={post.mainImage?.alt || post.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="mt-3 text-sm text-riverflow-600 font-medium flex items-center">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
