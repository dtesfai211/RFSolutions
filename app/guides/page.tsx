"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function GuidesPage() {
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
                  {t("guides.title") || "Business Setup Guides"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("guides.description") || "Comprehensive guides to help you navigate the business setup process"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Guide 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Guide thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-bold">How to Choose the Right Business Structure</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Learn about the different business structures available in the UAE and how to choose the right one
                    for your business.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    <Link href="/guides/business-structure">
                      Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Guide 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Guide thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-bold">Complete Guide to UAE Visa Types</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Understand the different types of visas available in the UAE and which one is right for you and your
                    employees.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    <Link href="/guides/visa-types">
                      Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Guide 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Guide thumbnail"
                    width={600}
                    height={400}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mt-4 text-xl font-bold">Banking in the UAE: A Business Guide</h3>
                  <p className="mt-2 text-gray-500 line-clamp-3">
                    Everything you need to know about opening and managing a business bank account in the UAE.
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-amber-600">
                    <Link href="/guides/banking">
                      Read Guide <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
