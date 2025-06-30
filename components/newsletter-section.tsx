"use client"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import NewsletterForm from "./NewsletterForm"

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

        <NewsletterForm/>
      </div>
    </section>
  )
}
