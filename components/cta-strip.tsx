"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function CTAStrip() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-r from-riverflow-600 to-riverflow-500 text-white py-12 md:py-20 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t("cta.title")}
          </h2>
          <p className="text-white/90 mt-2 text-sm md:text-base">
            {t("cta.description")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-white text-riverflow-600 hover:bg-white/90 font-semibold">
            <Link href="/contact">
              {t("cta.button.primary")}
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/quote">
              {t("cta.button.secondary")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
