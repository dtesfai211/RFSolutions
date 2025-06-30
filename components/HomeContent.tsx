// components/HomeContent.tsx
"use client"

import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact/ContactCard"
import NewsletterSection from "@/components/newsletter-section" 
import FinalCTASection from "@/components/final-cta-section"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import type { SiteSettings } from "@/types/siteSettings"

export default function HomeContent({ settings }: { settings: SiteSettings }) {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection settings={settings} />
      <NewsletterSection /> 
      <FinalCTASection />
    </div>
  )
}
