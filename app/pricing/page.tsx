"use client"

import { Check, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import PageHeader from "@/components/layout/PageHeader"

export default function PricingPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (

    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <PageHeader titleKey="pricing.title" subtitleKey="pricing.description" />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>{t("pricing.starter.title")}</CardTitle>
                  <CardDescription>{t("pricing.starter.description")}</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$1,999</div>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Business Registration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Trade License</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Virtual Office Address</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Mail Handling</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic Document Processing</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-2">✕</span>
                      <span>Physical Office Space</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-2">✕</span>
                      <span>Corporate Bank Account</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-2">✕</span>
                      <span>Visa Processing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="mt-6 w-full rounded-full">
                    <Link href="/pricing/starter">{t("pricing.cta") || "Get Started"}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col border-2 border-riverflow-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-riverflow-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t("pricing.most-popular")}
                </div>
                <CardHeader>
                  <CardTitle>{t("pricing.professional.title")}</CardTitle>
                  <CardDescription>{t("pricing.professional.description")}</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$3,499</div>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Business Registration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Trade License</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Physical Office Space</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1">
                              <HelpCircle className="h-3 w-3" />
                              <span className="sr-only">More info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes 6 months of shared office space</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Corporate Bank Account</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Mail Handling</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Document Processing</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Business Consultation (2 hours)</span>
                    </li>
                    <li className="flex items-center text-gray-400">
                      <span className="mr-2">✕</span>
                      <span>Visa Processing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="mt-6 w-full rounded-full bg-riverflow-600 hover:bg-riverflow-700">
                    <Link href="/pricing/professional">{t("pricing.cta") || "Get Started"}</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>{t("pricing.premium.title")}</CardTitle>
                  <CardDescription>{t("pricing.premium.description")}</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$5,999</div>
                  <p className="text-sm text-gray-500">One-time payment</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="grid gap-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Business Registration</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Trade License</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Premium Office Location</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1">
                              <HelpCircle className="h-3 w-3" />
                              <span className="sr-only">More info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes 12 months of private office space</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Corporate Bank Account</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Visa Processing</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-4 w-4 ml-1">
                              <HelpCircle className="h-3 w-3" />
                              <span className="sr-only">More info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Includes processing for up to 3 visas</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Dedicated Business Consultant</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Business Consultation (10 hours)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Marketing Support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="mt-6 w-full rounded-full">
                    <Link href="/pricing/premium">{t("pricing.cta") || "Get Started"}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-12 rounded-lg border bg-gray-50 p-6 md:p-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-bold">Need a custom solution?</h3>
                  <p className="text-gray-500">
                    Contact us for a tailored package that meets your specific business requirements
                  </p>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our pricing and services
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:gap-8">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold">What's included in the business registration?</h3>
                <p className="mt-2 text-gray-500">
                  Our business registration includes company name reservation, preparation of all required documents,
                  submission to relevant authorities, and obtaining your business license.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold">How long does the business setup process take?</h3>
                <p className="mt-2 text-gray-500">
                  The typical timeline for business setup is 2-3 weeks, depending on the type of business and specific
                  requirements. Our premium packages include expedited processing.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold">Are there any additional government fees?</h3>
                <p className="mt-2 text-gray-500">
                  Government fees vary based on your business activity and license type. Our packages include standard
                  government fees, and we'll provide a detailed breakdown of any additional costs before proceeding.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-bold">Can I upgrade my package later?</h3>
                <p className="mt-2 text-gray-500">
                  Yes, you can upgrade to a higher package at any time. We'll simply charge the difference between your
                  current package and the upgraded one, plus a small administrative fee.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
