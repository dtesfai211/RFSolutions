"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslation } from "@/hooks/use-translation"

export default function FAQAccordion() {
  const { t } = useTranslation()
  return (
    <Accordion type="single" collapsible className="w-full">
      {Array.from({ length: 10 }, (_, i) => {
        const index = i + 1
        return (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{t(`faq.q${index}`)}</AccordionTrigger>
            <AccordionContent>{t(`faq.a${index}`)}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
