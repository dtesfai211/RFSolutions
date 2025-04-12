"use client"

import Link from "next/link"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function AboutPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-riverflow-50 py-12 md:py-16 lg:py-20 relative overflow-hidden">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl">
                  {t("about.title") || "About Us"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.description") || "Your Partner for Seamless UAE Business Solutions"}
                </p>
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
                    {t("about.story.title") || "Our Story"}
                  </h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("about.story.content1") ||
                      "Founded in 2008, Riverflow Solutions has been at the forefront of business setup and company formation services for over 15 years. What started as a small consultancy has grown into a comprehensive business solutions provider trusted by entrepreneurs and corporations worldwide."}
                  </p>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("about.story.content2") ||
                      "Our journey has been defined by a commitment to excellence, integrity, and client success. We've helped establish over 5,000 businesses across various industries, guiding entrepreneurs through every step of their business setup journey."}
                  </p>
                </div>
              </div>
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Dubai business district"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-t from-white to-riverflow-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path
                fill="#0284c7"
                fillOpacity="1"
                d="M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,186.7C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                  {t("about.mission.title") || "Our Mission & Vision"}
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.mission.subtitle") || "Our Mission"}</h3>
                <p className="mt-2 text-gray-500">
                  {t("about.mission.content") ||
                    "To simplify the business setup process and empower entrepreneurs to turn their visions into reality through expert guidance, personalized solutions, and unwavering support."}
                </p>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.vision.subtitle") || "Our Vision"}</h3>
                <p className="mt-2 text-gray-500">
                  {t("about.vision.content") ||
                    "To be the leading business setup service provider, recognized globally for excellence, innovation, and commitment to client success in an ever-evolving business landscape."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">
                  {t("about.values.title") || "Our Values"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.values.description") || "The principles that guide everything we do"}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m10 13-2 2 2 2" />
                    <path d="m14 17 2-2-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.values.integrity") || "Integrity"}</h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.integrity.content") ||
                    "We uphold the highest ethical standards in all our business dealings, ensuring transparency and honesty in every interaction."}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.values.excellence") || "Excellence"}</h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.excellence.content") ||
                    "We strive for excellence in everything we do, continuously improving our services to exceed client expectations."}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">
                  {t("about.values.client-centric") || "Client-Centric"}
                </h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.client-centric.content") ||
                    "Our clients are at the heart of everything we do. We prioritize their needs and tailor our services to help them achieve their goals."}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.values.trust") || "Trust"}</h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.trust.content") ||
                    "We build lasting relationships based on trust, delivering on our promises and safeguarding our clients' interests."}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.values.knowledge") || "Knowledge"}</h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.knowledge.content") ||
                    "We continuously expand our expertise to provide informed guidance and innovative solutions in a dynamic business environment."}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 text-center shadow-sm hover:shadow-md transition-all">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-riverflow-100">
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
                    className="h-8 w-8 text-riverflow-600"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 2 2 6-6" />
                    <path d="m7 16 2 2 6-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-riverflow-800">{t("about.values.efficiency") || "Efficiency"}</h3>
                <p className="text-sm text-gray-500">
                  {t("about.values.efficiency.content") ||
                    "We value our clients' time and resources, streamlining processes to deliver efficient and effective solutions."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path
                fill="white"
                fillOpacity="1"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    {t("about.join.title") || "Join Our Journey"}
                  </h2>
                  <p className="text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("about.join.content") ||
                      "Whether you're starting a new business or expanding your existing operations, we're here to support your journey every step of the way."}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="rounded-full bg-white text-riverflow-600 hover:bg-gray-100">
                    <Link href="/contact">{t("about.join.cta.contact") || "Contact Us"}</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                    <Link href="/services">{t("about.join.cta.learn") || "Learn More"}</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                  <div className="text-4xl font-bold text-white">15+</div>
                  <div className="text-center text-sm font-medium">
                    {t("about.stats.years") || "Years of Experience"}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                  <div className="text-4xl font-bold text-white">5,000+</div>
                  <div className="text-center text-sm font-medium">
                    {t("about.stats.businesses") || "Businesses Launched"}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                  <div className="text-4xl font-bold text-white">50+</div>
                  <div className="text-center text-sm font-medium">
                    {t("about.stats.consultants") || "Expert Consultants"}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4">
                  <div className="text-4xl font-bold text-white">98%</div>
                  <div className="text-center text-sm font-medium">
                    {t("about.stats.satisfaction") || "Client Satisfaction"}
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
