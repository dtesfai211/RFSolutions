"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { sanityClient } from "@/lib/sanity"
import { groq } from "next-sanity"
import { Calendar, Mail } from "lucide-react"
import { motion } from "framer-motion"

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
    <aside className="w-full md:w-72 px-4 md:pl-8 md:pr-4 py-6 md:sticky md:top-24 border-l border-gray-100 space-y-10">

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-lg font-semibold mb-4 text-riverflow-800">Recent Posts</h2>
        {recentPosts.length === 0 ? (
          <p className="text-sm text-gray-500">No recent posts available.</p>
        ) : (
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
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-riverflow-50 border border-riverflow-100 p-5 rounded-lg shadow-sm"
      >
        <div className="flex items-center gap-2 mb-2 text-riverflow-700">
          <Mail className="h-4 w-4" />
          <h3 className="text-base font-semibold">Stay Updated</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Subscribe to get the latest blog updates and business insights.
        </p>
        <form
          action="https://example.formspark.io/f/your-id" // Replace with actual endpoint
          method="POST"
          className="space-y-2"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            placeholder="Your email address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-riverflow-500"
          />
          <button
            type="submit"
            className="w-full bg-riverflow-600 text-white rounded-md px-3 py-2 text-sm hover:bg-riverflow-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </aside>
  )
}
