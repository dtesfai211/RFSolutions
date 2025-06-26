"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-white relative z-10">
      <div className="container grid md:grid-cols-2 items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src="/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept.jpg"
            alt="About Riverflow Solutions"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-riverflow-800 mb-4 ">
            {t("about.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            {t("about.description")}
          </p>
          <ul className="space-y-2 text-gray-700 mb-8">
            <li>{t("about.highlight.1")}</li>
            <li>{t("about.highlight.2")}</li>
            <li>{t("about.highlight.3")}</li>
          </ul>
          <Button className="rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700 px-6 py-3 text-sm md:text-base" asChild>
            <a href="/contact">{t("about.cta")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
