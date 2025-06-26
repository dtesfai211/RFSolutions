"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

const testimonials = [
  { key: "1" },
  { key: "2" },
  { key: "3" },
]

export default function TestimonialsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-riverflow-800"
        >
          {t("testimonials.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto"
        >
          {t("testimonials.subtitle")}
        </motion.p>
      </div>

      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(({ key }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-riverflow-50 border border-riverflow-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Quote className="w-6 h-6 text-riverflow-600 mb-4" />
            <blockquote className="text-sm text-gray-800 italic mb-4 leading-relaxed">
              “{t(`testimonials.${key}.quote`)}”
            </blockquote>
            <div className="font-semibold text-riverflow-800 text-sm">
              {t(`testimonials.${key}.name`)}
            </div>
            <div className="text-xs text-gray-500">{t(`testimonials.${key}.title`)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
