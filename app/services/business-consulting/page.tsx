"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function BusinessConsultingPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    
      <main className="flex-1">
        <section className="riverflow-bg-with-waves py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-riverflow-900">
                  {t("service.business-consulting.title") || "Business Consulting"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("service.business-consulting.description") ||
                    "Expert guidance and strategic consulting for business growth and development"}
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
                  {t("service.business-consulting.title") || "Business Consulting"}
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
                    {t("service.business-consulting.title") || "Business Consulting"}
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("service.business-consulting.content") ||
                      "Our Business Consulting service provides expert guidance on market entry, business strategy, and growth opportunities in the UAE. Our consultants have deep knowledge of local markets and regulations."}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-riverflow-800">What We Offer</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Market Entry Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Business Planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Growth Consulting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Regulatory Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Financial Advisory</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-riverflow-600 mt-0.5" />
                      <span>Market Research</span>
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
                  alt="Business Consulting"
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
                  Our Consulting Approach
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A tailored approach to meet your specific business needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Assessment</h3>
                <p className="text-sm text-gray-500">
                  We conduct a thorough assessment of your business goals, challenges, and opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Strategy</h3>
                <p className="text-sm text-gray-500">
                  We develop a customized strategy to address your specific business needs and objectives.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">Implementation</h3>
                <p className="text-sm text-gray-500">
                  We provide ongoing support and guidance to help you implement the strategy effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need Business Advice?</h2>
                <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your business consulting needs
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
  )
}
