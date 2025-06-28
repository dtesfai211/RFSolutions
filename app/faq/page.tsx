"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/layout/PageHeader"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FAQPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  return (
    <main className="flex-1">
      {/* Page Header with background + motion already in PageHeader */}
      <PageHeader titleKey="faq.title" subtitleKey="faq.description" />

      {/* FAQ Accordion Section */}
      <motion.section
        className="py-12 md:py-16 lg:py-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
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
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="py-12 md:py-16 lg:py-20 bg-gray-50"
        {...fadeIn}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {t("faq.still.title")}
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t("faq.still.description")}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild className="rounded-full">
                <Link href="/contact">{t("faq.still.contact")}</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">{t("faq.still.schedule")}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
