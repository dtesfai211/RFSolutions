// components/contact/ContactPageClient.tsx
"use client"

import ContactCard from "./ContactCard"
import type { SiteSettings } from "@/types/siteSettings"

export default function ContactPageClient({ settings }: { settings: SiteSettings }) {
  return <ContactCard settings={settings} />
}
