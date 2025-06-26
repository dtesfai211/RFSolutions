"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

const slides = [
  { image: "/pexels-mo-ismail-2130628-3763190.jpg", titleKey: "hero.slides.0.title", descriptionKey: "hero.slides.0.description" },
  { image: "/pexels-paul-loh-65233-233698.jpg", titleKey: "hero.slides.1.title", descriptionKey: "hero.slides.1.description" },
  { image: "/pexels-timo-volz-837240-3769312.jpg", titleKey: "hero.slides.2.title", descriptionKey: "hero.slides.2.description" },
  { image: "/pexels-zhangkaiyv-1139556.jpg", titleKey: "hero.slides.3.title", descriptionKey: "hero.slides.3.description" },
]

export default function Hero() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const currentSlide = slides[current]

  return (
    <section className="relative isolate overflow-hidden bg-white min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt="Hero Background"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10" />

            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="w-full h-full bg-black/30 shadow-[inset_0_0_200px_60px_rgba(0,0,0,0.5)]" />
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          key={currentSlide.titleKey}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          {t(currentSlide.titleKey)}
        </motion.h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto mt-6">
          <motion.p
            key={currentSlide.descriptionKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg font-light tracking-wide text-gray-200"
            style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}
          >
            {t(currentSlide.descriptionKey)}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button asChild className="rounded-full px-6 py-3 text-base">
            <Link href="/contact">{t("hero.cta.contact") || "Contact us"}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-gray-300 text-white hover:border-white hover:text-white px-6 py-3 text-base"
          >
            <Link href="/pricing">{t("hero.cta.prices") || "Prices"}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
