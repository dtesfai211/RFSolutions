// app/blog/[slug]/page.tsx
import { sanityClient } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { portableTextComponents } from "@/components/portableTextComponents"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import { groq } from "next-sanity"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export const revalidate = 60 // ISR: Revalidate every 60 seconds

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return slugs.map((slug: string) => ({ slug }))
}

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    title,
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "mainImage": mainImage.asset->url,
    "alt": mainImage.alt,
    "categories": categories[]->{
      title,
      slug
    },
    body
  }
`


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanityClient.fetch(postQuery, { slug: params.slug })

  if (!post) {
    return notFound()
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {post.mainImage && (
        <Image
          src={post.mainImage}
          alt={post.alt || "Blog image"}
          width={800}
          height={450}
          className="w-full h-auto rounded-md object-cover mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {post.categories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((cat: { slug: { current: Key | null | undefined }; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined }) => (
            <span
              key={cat.slug?.current}
              className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {cat.title}
            </span>
          ))}
        </div>
      )}


      <div className="text-sm text-gray-500 flex items-center gap-3 mb-8">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
        </div>
        {post.authorName && (
          <span>by <strong>{post.authorName}</strong></span>
        )}
      </div>

      <div className="prose max-w-none prose-lg prose-slate">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </article>
  )
}
