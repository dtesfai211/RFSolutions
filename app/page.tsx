// app/page.tsx
"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact/ContactCard"
import NewsletterSection from "@/components/newsletter-section"
import FAQSection from "@/components/faq-section"
import FinalCTASection from "@/components/final-cta-section"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function Home() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}
