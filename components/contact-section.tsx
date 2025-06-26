"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // TODO: Add actual form submission logic
  }

  return (
    <section className="bg-white py-16 px-4 md:px-0">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-riverflow-700 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            {t("contact.description")}
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-riverflow-600" />
              <span>+971 800-552</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-riverflow-600" />
              <span>info@riverflow.ae</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-riverflow-600" />
              <span>Dubai, UAE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 bg-riverflow-50 p-6 rounded-xl shadow-xl"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-riverflow-700">
              {t("contact.name")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-riverflow-600"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-riverflow-700">
              {t("contact.email")}
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-riverflow-600"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-riverflow-700">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-riverflow-600"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700 transition font-medium text-sm md:text-base py-2"
          >
            {t("contact.button")}
          </Button>

          {submitted && (
            <p className="text-sm text-green-600 mt-2">{t("contact.success")}</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
