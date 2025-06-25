"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full opacity-30">
          <path
            fill="#0284c7"
            fillOpacity="1"
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,160C672,160,768,192,864,213.3C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container relative z-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-riverflow-800">
          Riverflow Solutions FZ-LLC
        </h1>
        <p className="mt-4 text-lg md:text-xl text-riverflow-600 font-medium">
          {t("homepage.hero_tagline") || "Your Partner for Seamless UAE Business Solutions"}
        </p>

        <div className="mt-6">
          <Button className="bg-riverflow-600 text-white hover:bg-riverflow-700 rounded-full px-6 py-3 text-sm md:text-base">
            {t("homepage.get_started") || "Get Started"}
          </Button>
        </div>
      </div>
    </section>
  )
}
