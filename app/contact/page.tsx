"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function ContactPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors = {
      name: formData.name ? "" : t("contact.form.required"),
      email: !formData.email
        ? t("contact.form.required")
        : !validateEmail(formData.email)
          ? t("contact.form.email.invalid")
          : "",
      service: formData.service ? "" : t("contact.form.required"),
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
          message: "",
        })
        setSubmitSuccess(false)
      }, 3000)
    }, 1000)
  }

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <main className="flex-1">
        <section className="riverflow-bg-with-waves py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl md:text-5xl">
                  {t("contact.title")}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">Let's Connect</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form and our team will get back to you within 24 hours
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-riverflow-600" />
                  <div className="grid gap-1">
                    <h3 className="text-base font-medium">Phone</h3>
                    <p className="text-sm text-gray-500">800 - LLC (552)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-riverflow-600" />
                  <div className="grid gap-1">
                    <h3 className="text-base font-medium">Email</h3>
                    <p className="text-sm text-gray-500">info@riverflow.ae</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-riverflow-600" />
                  <div className="grid gap-1">
                    <h3 className="text-base font-medium">Office</h3>
                    <p className="text-sm text-gray-500">Business Bay, Downtown</p>
                    <p className="text-sm text-gray-500">Floor 22, Tower A</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-riverflow-600" />
                  <div className="grid gap-1">
                    <h3 className="text-base font-medium">Working Hours</h3>
                    <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-center">{t("contact.form.success")}</p>
                </div>
              ) : (
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        errors.name ? "text-red-500" : ""
                      }`}
                    >
                      <span className="form-input-required">{t("contact.form.name")}</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`flex h-10 w-full rounded-md border ${
                        errors.name ? "border-red-500" : "border-input"
                      } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        errors.email ? "text-red-500" : ""
                      }`}
                    >
                      <span className="form-input-required">{t("contact.form.email")}</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`flex h-10 w-full rounded-md border ${
                        errors.email ? "border-red-500" : "border-input"
                      } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="service"
                      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                        errors.service ? "text-red-500" : ""
                      }`}
                    >
                      <span className="form-input-required">{t("contact.form.service")}</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`flex h-10 w-full rounded-md border ${
                        errors.service ? "border-red-500" : "border-input"
                      } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                    >
                      <option value="">Select a service</option>
                      <option value="business-formation">Business Formation</option>
                      <option value="trade-licensing">Trade Licensing</option>
                      <option value="office-solutions">Office Solutions</option>
                      <option value="visa-services">Visa Services</option>
                      <option value="banking-support">Banking Support</option>
                      <option value="business-consulting">Business Consulting</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : t("contact.form.submit")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-riverflow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-riverflow-900 sm:text-4xl">Visit Our Office</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a meeting with our consultants at our downtown office
                </p>
              </div>
              <div className="w-full overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-[16/9] w-full bg-gray-100">
                  {/* This would be a map iframe in a real implementation */}
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 p-12 text-center">
                    <p className="text-gray-500">Map would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
