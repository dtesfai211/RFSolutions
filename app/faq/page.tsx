"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Link from "next/link"

export default function FAQPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return ( 
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("faq.title") || "Frequently Asked Questions"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("faq.description") ||
                    "Find answers to common questions about our services and business setup process"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t("faq.q1") || "What services do you offer?"}</AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a1") ||
                      "We offer a comprehensive range of business setup services, including company formation, trade licensing, office solutions, visa processing, banking support, and business consulting. Our services are designed to provide end-to-end support for entrepreneurs and businesses at every stage of their journey."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t("faq.q2") || "How long does the business setup process take?"}</AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a2") ||
                      "The typical timeline for business setup is 2-3 weeks, depending on the type of business and specific requirements. Our premium packages include expedited processing which can reduce this timeframe. During your initial consultation, we'll provide a more accurate timeline based on your specific business needs."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    {t("faq.q3") || "What are the costs involved in setting up a business?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a3") ||
                      "The costs vary depending on the type of business, location, and specific requirements. Our packages start from $1,999 for basic business setup. This includes standard government fees, but additional costs may apply based on your specific business activities. We provide transparent pricing and will give you a detailed breakdown of all costs during your consultation."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    {t("faq.q4") || "Do I need to be physically present during the setup process?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a4") ||
                      "While some steps may require your physical presence, many aspects of the business setup process can be handled remotely. Our team can guide you on which steps require your presence and help coordinate the timing to minimize your travel requirements. We also offer Power of Attorney services for clients who cannot be physically present."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    {t("faq.q5") || "What documents are required for business setup?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a5") ||
                      "The required documents typically include passport copies, visa copies (if applicable), passport-sized photographs, and a business plan. Depending on your business activity, additional documents may be required. Our team will provide you with a comprehensive checklist of all required documents based on your specific business type and location."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    {t("faq.q6") || "Can you help with opening a corporate bank account?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a6") ||
                      "Yes, we provide comprehensive banking support, including assistance with corporate bank account opening. We have established relationships with major banks and can help you navigate the requirements and documentation needed for a successful application. Our Professional and Premium packages include corporate bank account setup as part of the service."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    {t("faq.q7") || "What types of business structures are available?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a7") ||
                      "There are several business structures available, including Limited Liability Company (LLC), Free Zone Company, Offshore Company, and Branch Office. Each structure has its own advantages, requirements, and limitations. Our consultants will help you understand the differences and recommend the most suitable structure based on your business goals, activities, and budget."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    {t("faq.q8") || "Do you offer ongoing support after business setup?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a8") ||
                      "Yes, we provide ongoing support services including license renewals, visa renewals, accounting and tax services, legal consultations, and business growth advisory. Our goal is to build long-term relationships with our clients and support them throughout their business journey, not just during the initial setup phase."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>{t("faq.q9") || "Can I upgrade my package later?"}</AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a9") ||
                      "Yes, you can upgrade to a higher package at any time. We'll simply charge the difference between your current package and the upgraded one, plus a small administrative fee. This flexibility allows you to start with a basic package and add more services as your business grows and evolves."}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>
                    {t("faq.q10") || "What is the difference between mainland and free zone companies?"}
                  </AccordionTrigger>
                  <AccordionContent>
                    {t("faq.a10") ||
                      "Mainland companies can operate anywhere in the country and engage in business activities without restrictions, but typically require a local sponsor. Free Zone companies offer 100% foreign ownership, tax exemptions, and simplified procedures, but may have restrictions on conducting business outside the free zone. Our consultants can help you determine which option is best for your specific business needs."}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {t("faq.still.title") || "Still Have Questions?"}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("faq.still.description") || "Our team is here to help you with any questions you may have"}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="rounded-full">
                  <Link href="/contact">{t("faq.still.contact") || "Contact Us"}</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/contact">{t("faq.still.schedule") || "Schedule a Consultation"}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main> 
  )
}
