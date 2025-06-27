// app/contact/page.tsx
import { getSiteSettings } from "@/lib/getSiteSettings"
import ContactPageClient from "@/components/contact/ContactPageClient"
import PageHeader from "@/components/layout/PageHeader" 

export default async function ContactPage() {
  const settings = await getSiteSettings() 
  return (
    <>
      <PageHeader titleKey="contact.page.title" subtitleKey="contact.page.subtitle" />
    
      <ContactPageClient settings={settings} />
    </>
  )
}
