"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTAStrip from "@/components/cta-strip"
import NewsletterSection from "@/components/newsletter-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function Home() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  // Form state for contact section
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Validate email format
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: formData.name ? "" : t("contact.form.required") || "Required field",
      email: !formData.email
        ? t("contact.form.required") || "Required field"
        : !validateEmail(formData.email)
          ? t("contact.form.email.invalid") || "Please enter a valid email address"
          : "",
      service: formData.service ? "" : t("contact.form.required") || "Required field",
    }

    setErrors(newErrors)

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          service: "",
        })
        setSubmitSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <TestimonialsSection /> 
      <ContactSection />
      <NewsletterSection/>
      <FAQSection/>
      <FinalCTASection/>
      <Footer />
    </div>
  )
}
