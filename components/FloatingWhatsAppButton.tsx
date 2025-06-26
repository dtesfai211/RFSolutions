// components/FloatingWhatsAppButton.tsx
"use client"

import { useEffect, useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { sanityClient } from "@/lib/sanity"

type SiteSettings = {
  whatsappEnabled?: boolean
  whatsappNumber?: string
  whatsappMessage?: string
}

export default function FloatingWhatsAppButton() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "siteSettings"][0]{whatsappEnabled, whatsappNumber, whatsappMessage}`
      )
      .then(setSettings)
  }, [])

  if (!settings?.whatsappEnabled || !settings.whatsappNumber) return null

  const chatUrl = `https://wa.me/${settings.whatsappNumber}${
    settings.whatsappMessage
      ? `?text=${encodeURIComponent(settings.whatsappMessage)}`
      : ""
  }`

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  )
}
