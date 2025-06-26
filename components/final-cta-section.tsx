"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function FinalCTASection() {
  const { t } = useTranslation()

  return (
    <section className="relative py-16 bg-gradient-to-r from-riverflow-600 via-riverflow-700 to-riverflow-800 text-white text-center overflow-hidden">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t("final_cta.title") || "Ready to Set Up Your Business in the UAE?"}
        </h2>
        <p className="text-lg text-gray-100 mb-6">
          {t("final_cta.subtitle") || "Our experts are here to help you every step of the way."}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button asChild className="rounded-full bg-white text-riverflow-700 hover:bg-gray-200 text-sm font-medium px-6 py-3">
            <Link href="/contact">
              {t("final_cta.button") || "Book Free Consultation"}
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-riverflow-700 text-sm font-medium px-6 py-3">
            <Link href="/services">
              {t("final_cta.secondary_button") || "Explore Services"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
