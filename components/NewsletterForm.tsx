"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

export default function NewsletterForm() {
  const { t } = useTranslation()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Reset previous error and success messages
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setEmail("") // Clear the email field
      } else {
        setError(data.error || "An unexpected error occurred.")
      }
    } catch (err) {
      setError("Failed to send subscription. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pt-6 flex flex-col sm:flex-row items-center gap-4">
      <input
        type="email"
        name="email"
        required
        placeholder={t("newsletter.email_placeholder") || "Enter your email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-riverflow-500"
      />
      <Button
        type="submit"
        className="rounded-full bg-riverflow-600 hover:bg-riverflow-700 text-white px-6 py-2 transition"
        disabled={loading}
      >
        {loading ? "Subscribing..." : t("newsletter.button") || "Subscribe"}
      </Button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">{t("newsletter.success") || "Thank you for subscribing!"}</p>}
    </form>
  )
}
