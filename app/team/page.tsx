"use client"

import Image from "next/image"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function TeamPage() {
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
                  {t("team.title") || "Meet Our Team"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("team.description") || "Our experienced professionals are dedicated to helping you succeed"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Sarah Johnson"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-amber-600">CEO & Founder</p>
                  <p className="mt-2 text-sm text-gray-500">
                    With over 15 years of experience in business consulting and setup services, Sarah leads our team
                    with vision and expertise.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Michael Chen"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-sm text-amber-600">Operations Director</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Michael oversees all operational aspects of our business, ensuring smooth and efficient service
                    delivery for all clients.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Aisha Al-Mansoori"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Aisha Al-Mansoori</h3>
                  <p className="text-sm text-amber-600">Legal Consultant</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Aisha brings extensive knowledge of local business laws and regulations, helping clients navigate
                    complex legal requirements.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="David Rodriguez"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">David Rodriguez</h3>
                  <p className="text-sm text-amber-600">Financial Advisor</p>
                  <p className="mt-2 text-sm text-gray-500">
                    David provides expert financial guidance to help businesses establish strong financial foundations
                    and banking relationships.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Priya Sharma"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Priya Sharma</h3>
                  <p className="text-sm text-amber-600">Client Relations Manager</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Priya ensures our clients receive personalized attention and support throughout their business setup
                    journey.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Ahmed Al-Farsi"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Ahmed Al-Farsi</h3>
                  <p className="text-sm text-amber-600">Business Development</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Ahmed works with clients to understand their business goals and develop tailored solutions for their
                    success.
                  </p>
                  <div className="mt-4 flex space-x-3">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {t("team.join.title") || "Join Our Team"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("team.join.description") ||
                    "We're always looking for talented individuals to join our growing team"}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="rounded-full">{t("team.join.cta") || "View Open Positions"}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
  )
}
