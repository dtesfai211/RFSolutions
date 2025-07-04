"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"

export default function ProfessionalPricingPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("pricing.professional.title") || "Professional Package"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("pricing.professional.description") || "Ideal for growing businesses"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-xl border-2 border-riverflow-600 bg-white p-6 shadow-md relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-riverflow-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t("pricing.most-popular") || "Most Popular"}
                </div>
                <div className="mb-6 text-center">
                  <h2 className="text-4xl font-bold text-riverflow-800">$3,499</h2>
                  <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Business Name Registration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Trade License (1 year validity)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Physical Office Space (Shared)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Corporate Bank Account Setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Mail Handling Service</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Meeting Room Access (5 hours/month)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 mt-0.5" />
                        <span>Priority Documentation Processing</span>
                      </li>
                      <li className="flex items-start">
                        <X className="mr-2 h-5 w-5 text-red-500 mt-0.5" />
                        <span className="text-gray-400">Visa Processing</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Additional Details</h3>
                    <ul className="space-y-3 text-gray-500">
                      <li>Processing time: 1-2 weeks</li>
                      <li>Government fees included</li>
                      <li>Dedicated account manager</li>
                      <li>Business advisory session (2 hours)</li>
                      <li>Expedited document processing</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full rounded-full bg-riverflow-600 hover:bg-riverflow-700">
                      <Link href="/contact">{t("pricing.cta") || "Get Started"}</Link>
                    </Button>
                    <p className="mt-4 text-center text-sm text-gray-500">
                      Need a custom solution?{" "}
                      <Link href="/contact" className="text-riverflow-600 hover:underline">
                        Contact us
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Packages</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our Professional Package compares to other options
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="rounded-full">
                  <Link href="/pricing">View All Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
  )
}
