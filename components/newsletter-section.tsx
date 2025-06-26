"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"

export default function NewsletterSection() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    // You can integrate Mailchimp or Sanity webhook here
  }

  return (
    <section className="bg-riverflow-50 py-16 px-4 md:px-0">
      <div className="container text-center max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-riverflow-700 mb-4">
          {t("newsletter.title")}
        </h2>
        <p className="text-gray-600 mb-6">{t("newsletter.description")}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("newsletter.email_placeholder")}
            className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-riverflow-600"
          />
          <Button type="submit" className="w-full sm:w-auto rounded-full bg-riverflow-600 text-white hover:bg-riverflow-700">
            {t("newsletter.button")}
          </Button>
        </form>

        {submitted && (
          <p className="text-sm text-green-600 mt-4">{t("newsletter.success")}</p>
        )}
      </div>
    </section>
  )
}
