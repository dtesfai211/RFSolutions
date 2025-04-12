"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function SupportPage() {
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
                  {t("support.title") || "Customer Support"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("support.description") || "We're here to help you with any questions or issues you may have"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Support Option 1 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Phone Support</h3>
                <p className="mt-2 text-gray-500">
                  Speak directly with our customer support team for immediate assistance.
                </p>
                <Button className="mt-4 rounded-full" onClick={() => (window.location.href = "tel:800-552")}>
                  Call 800-LLC (552)
                </Button>
              </div>

              {/* Support Option 2 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Email Support</h3>
                <p className="mt-2 text-gray-500">Send us an email and we'll get back to you within 24 hours.</p>
                <Button
                  className="mt-4 rounded-full"
                  onClick={() => (window.location.href = "mailto:support@riverflow.ae")}
                >
                  Email Us
                </Button>
              </div>

              {/* Support Option 3 */}
              <div className="flex flex-col items-center rounded-lg border bg-white p-6 text-center shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-riverflow-100 text-riverflow-600">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Live Chat</h3>
                <p className="mt-2 text-gray-500">
                  Chat with our support team in real-time for quick answers to your questions.
                </p>
                <Button className="mt-4 rounded-full">Start Chat</Button>
              </div>
            </div>

            <div className="mt-16 rounded-lg border bg-gray-50 p-6 md:p-8">
              <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <div>
                  <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                  <p className="text-gray-500">Find answers to common questions in our FAQ section.</p>
                </div>
                <Button asChild className="rounded-full">
                  <Link href="/faq">View FAQ</Link>
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
