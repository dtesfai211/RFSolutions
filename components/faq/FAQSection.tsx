"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/hooks/use-translation"
import { motion } from "framer-motion"
import FAQAccordion from "./FAQAccordion"

type FAQSectionProps = {
  maxItems?: number
  animated?: boolean
  className?: string
  titleKey?: string
  descriptionKey?: string
}

export default function FAQSection({
  maxItems = 10,
  animated = true,
  className = "",
  titleKey = "faq.title",
  descriptionKey = "faq.description",
}: FAQSectionProps) {
  const { t } = useTranslation()
  const items = Array.from({ length: maxItems }, (_, i) => i + 1)

  const SectionWrapper = animated ? motion.section : "section"

  return (
    <SectionWrapper
      className={`relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden ${className}`}
      initial={animated ? { opacity: 0, y: 30 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      viewport={animated ? { once: true } : undefined}
      transition={animated ? { duration: 0.6, ease: "easeOut" } : undefined}
    >
      {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-riverflow-400 via-white/40 to-riverflow-400 blur-sm opacity-70 z-10 rounded-full" />

      <div className="relative z-20 container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            {t(titleKey)}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            {t(descriptionKey)}
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm shadow-md">
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
            {items.map((index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left px-6 py-4 hover:bg-gray-100 transition-all">
                  {t(`faq.q${index}`)}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {t(`faq.a${index}`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  )
}
