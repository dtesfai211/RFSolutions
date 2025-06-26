"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  { questionKey: "faq.q1", answerKey: "faq.a1" },
  { questionKey: "faq.q2", answerKey: "faq.a2" },
  { questionKey: "faq.q3", answerKey: "faq.a3" },
]

export default function FAQSection() {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="container max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-riverflow-700 mb-10 text-center"
        >
          {t("faq.title") || "Frequently Asked Questions"}
        </motion.h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 bg-riverflow-50 hover:bg-riverflow-100 transition"
                >
                  <span className="text-left font-medium text-riverflow-800 text-base md:text-lg">
                    {t(item.questionKey)}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-riverflow-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-gray-700 text-sm leading-relaxed"
                    >
                      {t(item.answerKey)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
