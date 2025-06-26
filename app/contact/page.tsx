"use client"

import React from "react" 
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import ContactCard from "@/components/contact/ContactCard"

export default function ContactPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <>
      <main className={`flex-1 ${isRTL ? "rtl" : "ltr"}`}>
        <section className="riverflow-bg-with-waves py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl">
                  {t("contact.title")}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <ContactCard />
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">{t("contact.visit.title") || "Visit Our Office"}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.visit.description") || "Schedule a meeting with our consultants at our downtown office"}
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-[16/9] w-full bg-gray-100">
                  {/* Replace with actual map iframe */}
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 p-12 text-center">
                    <p className="text-gray-500">{t("contact.visit.map_placeholder") || "Map would be displayed here"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
