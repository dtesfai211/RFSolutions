import NewsletterSignup from "@/components/NewsletterForm"
import ContactCard from "@/components/contact-section"

export default function FAQSidebarRight() {
  return (
    <div className="space-y-10">
      <NewsletterSignup />
      <ContactCard />
    </div>
  )
}
