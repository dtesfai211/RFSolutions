// app/contact/page.tsx
import { getSiteSettings } from "@/lib/getSiteSettings"
import ContactPageClient from "@/components/contact/ContactPageClient"

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return <ContactPageClient settings={settings} />
}
