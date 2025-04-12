"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function BlogPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("blog.title") || "Our Blog"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("blog.description") || "Latest news, insights, and updates from our business experts"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-1" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>May 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">The Ultimate Guide to Business Setup in 2023</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Learn about the latest trends, regulations, and opportunities for setting up your business in the
                    current economic landscape.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-2" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>April 28, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>7 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">5 Key Benefits of Establishing Your Business</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Discover the strategic advantages of setting up your business, from tax benefits to market access
                    and global opportunities.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-3" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>April 10, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>4 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Choosing the Right Business Structure</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Understanding the differences between LLC, Free Zone, and Mainland options to make the best choice
                    for your business goals.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-4" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>March 22, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>6 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Navigating Business Regulations</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    A comprehensive guide to understanding and complying with local business regulations and legal
                    requirements.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-5" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>March 15, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Securing Business Funding</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Explore various funding options available for new businesses, from traditional bank loans to venture
                    capital and angel investors.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <Link href="/blog/post-6" className="absolute inset-0 z-10">
                  <span className="sr-only">View Article</span>
                </Link>
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Blog post thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>February 28, 2023</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Building a Strong Business Network</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Tips and strategies for networking effectively and building valuable business relationships in the
                    local and international community.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button className="rounded-full">Load More Articles</Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest business insights and news
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="rounded-md">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
