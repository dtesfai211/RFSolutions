"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function Home() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  // Form state for contact section
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Validate email format
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: formData.name ? "" : t("contact.form.required") || "Required field",
      email: !formData.email
        ? t("contact.form.required") || "Required field"
        : !validateEmail(formData.email)
          ? t("contact.form.email.invalid") || "Please enter a valid email address"
          : "",
      service: formData.service ? "" : t("contact.form.required") || "Required field",
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          service: "",
        })
        setSubmitSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <HeroSection/>
      <main className="flex-1">
        <section className="relative overflow-hidden py-10 md:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path
                fill="#0284c7"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl lg:text-6xl/none">
                    {t("hero.title") || "Your Partner for Seamless UAE Business Solutions"}
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("hero.description") ||
                      "How would you like if you could set up the very first branch at the hottest spot in downtown with our business registration services? Imagine starting your dream business next to the tallest building in the world, and the center of the financial hub."}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="rounded-full bg-riverflow-600 text-blue hover:bg-riverflow-700">
                    <Link href="/contact">{t("hero.cta.contact") || "Contact us"}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full flex items-center gap-1 border-riverflow-600 text-riverflow-600 hover:bg-riverflow-50"
                  >
                    <Link href="/pricing">
                      {t("hero.cta.prices") || "Prices"} <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-riverflow-100 to-riverflow-50 opacity-80"></div>
                <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-riverflow-400 opacity-20"></div>
                <div className="absolute bottom-0 left-0 h-[150px] w-[150px] rounded-full bg-riverflow-400 opacity-20"></div>
                <div className="absolute bottom-[100px] right-[50px] h-[100px] w-[200px] rounded-full bg-riverflow-600 opacity-20"></div>
                <Image
                  src="/pexels-jeshoots-com-147458-442579.jpg?height=600&width=500"
                  alt="Dubai skyline with business professionals"
                  fill
                   
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
              <path
                fill="#0284c7"
                fillOpacity="0.1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 border-t">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-riverflow-400 text-riverflow-400" />
                ))}
                <span className="ml-2 text-sm font-medium">173 reviews on</span>
                <Image
                  src="/placeholder.svg?height=24&width=72"
                  alt="Google"
                  width={72}
                  height={24}
                  className="ml-2 h-6 w-auto"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card p-6 text-left hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-riverflow-400 text-riverflow-400" />
                  ))}
                </div>
                <div className="inline-block rounded-md bg-riverflow-50 px-3 py-1 text-xs font-medium mb-4 text-riverflow-700">
                  <span className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Company Formation
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Unfortunately, I was unable to execute my plan for business. But I must say that they have a
                  professional team and they guide you properly according to your requirements.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 text-left hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-riverflow-400 text-riverflow-400" />
                  ))}
                </div>
                <div className="inline-block rounded-md bg-riverflow-50 px-3 py-1 text-xs font-medium mb-4 text-riverflow-700">
                  <span className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    The setup
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  Great business support. Strong knowledge and professional team. Easiness for office bookings, flexible
                  hours. Special thanks for having done a great job.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 text-left hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-riverflow-400 text-riverflow-400" />
                  ))}
                </div>
                <div className="inline-block rounded-md bg-riverflow-50 px-3 py-1 text-xs font-medium mb-4 text-riverflow-700">
                  <span className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Trade license
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  So recently I helped set up my business. Their meticulous approach and quick response helped me to
                  start my company in a matter of days.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6 text-left hover:shadow-md transition-shadow">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-riverflow-400 text-riverflow-400" />
                  ))}
                </div>
                <div className="inline-block rounded-md bg-riverflow-50 px-3 py-1 text-xs font-medium mb-4 text-riverflow-700">
                  <span className="flex items-center">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Business Zone
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  The best business setup company. They have a beautiful office in a prime location, and Anne has been
                  super helpful along the process. Highly recommended!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-riverflow-50 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl">
                  {t("services.title") || "Our Services"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("services.description") ||
                    "We provide comprehensive business setup solutions tailored to your needs"}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">
                  {t("services.business-formation") || "Business Formation"}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.business-formation.description") ||
                    "Complete company registration services with all necessary documentation and approvals"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services/business-formation">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M7 8h.01" />
                    <path d="M11 8h.01" />
                    <path d="M15 8h.01" />
                    <path d="M7 12h.01" />
                    <path d="M11 12h.01" />
                    <path d="M15 12h.01" />
                    <path d="M7 16h.01" />
                    <path d="M11 16h.01" />
                    <path d="M15 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">
                  {t("services.visa-processing") || "Visa Processing"}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.visa-processing.description") ||
                    "Complete visa processing and immigration services for business owners and employees"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services/visa-services">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 21h18" />
                    <path d="M19 21v-4" />
                    <path d="M19 17a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2" />
                    <path d="M5 21v-4" />
                    <path d="M5 17a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">{t("services.bank-account") || "Bank Account"}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.bank-account.description") ||
                    "Assistance with corporate banking setup and financial services for your business"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services/banking-support">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                    <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                    <path d="M12 12v3" />
                    <path d="M8 21v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">{t("services.marketing") || "Marketing"}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.marketing.description") ||
                    "Strategic marketing services to help your business grow and reach your target audience"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services/business-consulting">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">
                  {t("services.health-insurance") || "Health Insurance"}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.health-insurance.description") ||
                    "Comprehensive health insurance solutions for you and your employees"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="group rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600 group-hover:bg-riverflow-600 group-hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-900">
                  {t("services.trademark") || "Trademark Registration"}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {t("services.trademark.description") ||
                    "Protect your brand with our trademark registration and intellectual property services"}
                </p>
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-riverflow-600 hover:text-riverflow-700">
                    <Link href="/services/trade-licensing">
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-16 lg:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-riverflow-50 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl">
                  {t("pricing.title") || "Pricing Plans"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("pricing.description") || "Choose the perfect package for your business needs"}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-riverflow-900">
                    {t("pricing.starter.title") || "Starter Package"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {t("pricing.starter.description") || "Perfect for small businesses and startups"}
                  </p>
                  <div className="mt-4 text-4xl font-bold text-riverflow-800">$1,999</div>
                  <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                </div>
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Business Registration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Trade License
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Virtual Office Address
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-full bg-riverflow-600 hover:bg-riverflow-700">
                  <Link href="/pricing/starter">{t("pricing.cta") || "Get Started"}</Link>
                </Button>
              </div>
              <div className="rounded-xl border-2 border-riverflow-600 bg-white p-6 shadow-md relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-riverflow-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  {t("pricing.most-popular") || "Most Popular"}
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-riverflow-900">
                    {t("pricing.professional.title") || "Professional Package"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {t("pricing.professional.description") || "Ideal for growing businesses"}
                  </p>
                  <div className="mt-4 text-4xl font-bold text-riverflow-800">$3,499</div>
                  <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                </div>
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Business Registration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Trade License
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Physical Office Space
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Corporate Bank Account
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-full bg-riverflow-600 hover:bg-riverflow-700">
                  <Link href="/pricing/professional">{t("pricing.cta") || "Get Started"}</Link>
                </Button>
              </div>
              <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-riverflow-900">
                    {t("pricing.premium.title") || "Premium Package"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {t("pricing.premium.description") || "Complete solution for established businesses"}
                  </p>
                  <div className="mt-4 text-4xl font-bold text-riverflow-800">$5,999</div>
                  <p className="text-sm text-gray-500 mt-1">One-time payment</p>
                </div>
                <ul className="grid gap-3 text-sm">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    All Professional Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Premium Office Location
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Visa Processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-riverflow-600" />
                    Dedicated Business Consultant
                  </li>
                </ul>
                <Button asChild className="mt-6 w-full rounded-full bg-riverflow-600 hover:bg-riverflow-700">
                  <Link href="/pricing/premium">{t("pricing.cta") || "Get Started"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-riverflow-50 z-0"></div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
              <path
                fill="#0284c7"
                fillOpacity="0.1"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,96C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                  {t("contact.title") || "Contact Us"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description") ||
                    "Ready to start your business journey? Get in touch with our expert team today."}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {submitSuccess ? (
                  <div className="rounded-lg border bg-green-50 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800">Thank You!</h3>
                    <p className="mt-2 text-sm text-green-600">
                      {t("contact.form.success") || "Your message has been sent successfully. We'll be in touch soon."}
                    </p>
                  </div>
                ) : (
                  <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid gap-2">
                      <label
                        htmlFor="name"
                        className={`text-sm font-medium leading-none ${errors.name ? "text-red-500" : ""}`}
                      >
                        {t("contact.form.name") || "Full Name"}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border ${
                          errors.name ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="email"
                        className={`text-sm font-medium leading-none ${errors.email ? "text-red-500" : ""}`}
                      >
                        {t("contact.form.email") || "Email"}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border ${
                          errors.email ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="service"
                        className={`text-sm font-medium leading-none ${errors.service ? "text-red-500" : ""}`}
                      >
                        {t("contact.form.service") || "Service Interested In"}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`flex h-10 w-full rounded-md border ${
                          errors.service ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      >
                        <option value="">Select a service</option>
                        <option value="business-formation">Business Formation</option>
                        <option value="trade-licensing">Trade Licensing</option>
                        <option value="visa-processing">Visa Processing</option>
                        <option value="office-solutions">Office Solutions</option>
                        <option value="banking-support">Banking Support</option>
                        <option value="business-consulting">Business Consulting</option>
                      </select>
                      {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : t("contact.form.submit") || "Submit"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
