// components/FloatingWhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa"

type SiteSettings = {
  whatsappEnabled?: boolean
  whatsappNumber?: string
  whatsappMessage?: string
}

export default function FloatingWhatsAppButton({ settings }: { settings: SiteSettings }) {
  if (!settings?.whatsappEnabled || !settings.whatsappNumber) return null

  const chatUrl = `https://wa.me/${settings.whatsappNumber}${
    settings.whatsappMessage ? `?text=${encodeURIComponent(settings.whatsappMessage)}` : ""
  }`

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-15 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  )
}
