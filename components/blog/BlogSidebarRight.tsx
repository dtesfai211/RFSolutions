// components/blog/BlogSidebarRight.tsx
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity"
import { groq } from "next-sanity"
import { Calendar } from "lucide-react"

type RecentPost = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
}

export default function BlogSidebarRight() {
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([])

  useEffect(() => {
    sanityClient
      .fetch(groq`
        *[_type == "post"] | order(publishedAt desc)[0...5] {
          _id,
          title,
          slug,
          publishedAt
        }
      `)
      .then(setRecentPosts)
  }, [])

  return (
    <aside className="w-full md:w-64 px-4 md:px-6 py-6 md:sticky md:top-24 border-l border-gray-100 space-y-10">
      {/* Recent Posts */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/blog/${post.slug.current}`}
                className="text-sm text-gray-700 hover:text-riverflow-600 transition-colors flex flex-col"
              >
                <span className="font-medium">{post.title}</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-base font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-3">
          Subscribe to get the latest blog updates and business insights.
        </p>
        <form
          action="https://example.formspark.io/f/your-id" // Replace with your Formspark/Mailchimp endpoint
          method="POST"
          className="space-y-2"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <button
            type="submit"
            className="w-full bg-riverflow-600 text-white rounded-md px-3 py-2 text-sm hover:bg-riverflow-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  )
}
