"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function OfficeSolutionsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <main className="flex-1">
        <section className="riverflow-bg-with-waves py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-riverflow-900">
                  {t("service.office-solutions.title") || "Office Solutions"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("service.office-solutions.description") ||
                    "Flexible office spaces, virtual offices, and premium business address services"}
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-riverflow-600">
                  {t("nav.home")}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/services" className="hover:text-riverflow-600">
                  {t("nav.services")}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-riverflow-600 font-medium">
                  {t("service.office-solutions.title") || "Office Solutions"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                    {t("service.office-solutions.title") || "Office Solutions"}
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("service.office-solutions.content") ||
                      "Our Office Solutions service provides a range of options to meet your business needs, from virtual offices to premium physical spaces in prime locations. We offer flexible terms and comprehensive support services."}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-riverflow-800">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Virtual Office Addresses</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Serviced Offices</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Meeting Room Access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Mail Handling Services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Reception Services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Business Support Services</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-riverflow-600 text-riverflow-600 hover:bg-riverflow-50"
                  >
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Office Solutions"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                  Our Office Locations
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Premium office spaces in prime business districts
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Downtown Office"
                    width={300}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Downtown</h3>
                <p className="text-sm text-gray-500">
                  Premium office space in the heart of the business district, with stunning views and excellent
                  amenities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Business Bay Office"
                    width={300}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Business Bay</h3>
                <p className="text-sm text-gray-500">
                  Modern office space in a vibrant business community, with excellent connectivity and networking
                  opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="h-40 w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <Image
                    src="/placeholder.svg?height=160&width=300"
                    alt="Free Zone Office"
                    width={300}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Free Zone</h3>
                <p className="text-sm text-gray-500">
                  Strategic office location in a free zone area, offering tax benefits and 100% foreign ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Find Your Office?</h2>
                <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your office space requirements
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="rounded-full bg-white text-riverflow-600 hover:bg-gray-100">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
