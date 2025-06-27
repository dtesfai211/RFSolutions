
import React, { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Clock, UserCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"
import type { SiteSettings } from "@/types/siteSettings"

export default function ContactCard({ settings }: { settings: SiteSettings }) {
  const { t } = useTranslation()
  // Fallback values if settings is undefined
  const contactName = settings?.contactName || "Sewit Haddish"
  const contactPosition = settings?.contactPosition || "General Manager"
  const phone = settings?.phone || "87190919991"
  const email = settings?.email || "info@riverflow.ae"
  const address = settings?.address || { line1: "Business Bay, Downtown", line2: "Floor 22, Tower A" }
  const workingHours = settings?.workingHours || {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 10:00 AM - 2:00 PM",
  }

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

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

    if (Object.values(newErrors).some((error) => error)) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

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
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      {/* Contact Info */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold">{t("contact.info.title")}</h2>
        <p className="text-gray-500">{t("contact.info.description")}</p>

        <div className="grid gap-5">
          <div className="flex items-start gap-4">
            <UserCircle2Icon className="h-6 w-6 text-riverflow-600" />
            <div>
              <h3 className="text-base font-medium">{contactName}</h3>
              <p className="text-sm text-gray-500">{contactPosition}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-riverflow-600" />
            <div>
              <h3 className="text-base font-medium">{t("contact.info.phone.title")}</h3>
              <p className="text-sm text-gray-500">{phone}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-riverflow-600" />
            <div>
              <h3 className="text-base font-medium">{t("contact.info.email.title")}</h3>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-riverflow-600" />
            <div>
              <h3 className="text-base font-medium">{t("contact.info.office.title")}</h3>
              <p className="text-sm text-gray-500">{address?.line1}</p>
              <p className="text-sm text-gray-500">{address?.line2}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 text-riverflow-600" />
            <div>
              <h3 className="text-base font-medium">{t("contact.info.hours.title")}</h3>
              <p className="text-sm text-gray-500">{workingHours?.weekdays}</p>
              <p className="text-sm text-gray-500">{workingHours?.saturday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
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
            <h3 className="text-xl font-bold text-green-600 mb-2">{t("contact.form.success.title") || "Message Sent!"}</h3>
            <p className="text-gray-500 text-center">{t("contact.form.success")}</p>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${errors.name ? "text-red-500" : ""
                  }`}
              >
                <span className="form-input-required">{t("contact.form.name")}</span>
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border ${errors.name ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                placeholder={t("contact.form.name.placeholder") || "Enter your name"}
                required
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="email"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${errors.email ? "text-red-500" : ""
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
                className={`flex h-10 w-full rounded-md border ${errors.email ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                placeholder={t("contact.form.email.placeholder") || "Enter your email"}
                required
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="service"
                className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${errors.service ? "text-red-500" : ""
                  }`}
              >
                <span className="form-input-required">{t("contact.form.service")}</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`flex h-10 w-full rounded-md border ${errors.service ? "border-red-500" : "border-input"
                  } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                required
              >
                <option value="">{t("contact.form.service.placeholder") || "Select a service"}</option>
                <option value="business-formation">{t("services.dropdown.business-formation") || "Business Formation"}</option>
                <option value="trade-licensing">{t("services.dropdown.trade-licensing") || "Trade Licensing"}</option>
                <option value="office-solutions">{t("services.dropdown.office-solutions") || "Office Solutions"}</option>
                <option value="visa-services">{t("services.dropdown.visa-processing") || "Visa Services"}</option>
                <option value="banking-support">{t("services.dropdown.banking-support") || "Banking Support"}</option>
                <option value="business-consulting">{t("services.dropdown.business-consulting") || "Business Consulting"}</option>
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
                placeholder={t("contact.form.message.placeholder") || "Enter your message"}
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("contact.form.submitting") || "Submitting..." : t("contact.form.submit")}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
