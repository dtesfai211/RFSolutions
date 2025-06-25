import Link from "next/link"
import RiverflowLogo from "./riverflow-logo"
import { useTranslation } from "@/hooks/use-translation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-riverflow-900 text-white border-t relative">
      <div className="absolute inset-0 bg-gradient-to-t from-riverflow-800 to-transparent opacity-20 z-0" />
      <div className="relative z-10 container px-4 md:px-6 py-10 space-y-10">
        {/* Top: Logo + Description + Socials */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          <div className="max-w-md space-y-4">
            <RiverflowLogo />
            <p className="text-sm text-gray-300 leading-relaxed">
              {t("footer.description") ||
                "Your trusted partner for business setup and company formation services in the UAE."}
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { href: "#", label: "Facebook", icon: "M18 2h-3a5 5..." },
                { href: "#", label: "Twitter", icon: "M22 4s-.7 2.1..." },
                { href: "#", label: "Instagram", icon: "M16 11.37..." },
                { href: "#", label: "LinkedIn", icon: "M16 8a6 6..." },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="hover:bg-riverflow-800 rounded-full p-2 transition-colors"
                  aria-label={item.label}
                >
                  <svg
                    className="h-5 w-5 text-riverflow-300 hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: `<path d="${item.icon}" />` }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            {[
              {
                title: t("footer.company") || "Company",
                links: [
                  { label: t("footer.about_us") || "About Us", href: "/about" },
                  { label: t("footer.our_team") || "Our Team", href: "/team" },
                  { label: t("footer.blog") || "Blog", href: "/blog" },
                  { label: t("footer.contact") || "Contact", href: "/contact" },
                ],
              },
              {
                title: t("footer.services") || "Services",
                links: [
                  { label: t("footer.business_setup") || "Business Setup", href: "/services/business-formation" },
                  { label: t("footer.visa_processing") || "Visa Processing", href: "/services/visa-services" },
                  { label: t("footer.bank_account") || "Bank Account", href: "/services/banking-support" },
                  { label: t("footer.trademark_registration") || "Trademark Registration", href: "/services/trade-licensing" },
                ],
              },
              {
                title: t("footer.resources") || "Resources",
                links: [
                  { label: t("footer.faq") || "FAQ", href: "/faq" },
                  { label: t("footer.pricing") || "Pricing", href: "/pricing" },
                  { label: t("footer.guides") || "Guides", href: "/guides" },
                  { label: t("footer.support") || "Support", href: "/support" },
                ],
              },
              {
                title: t("footer.legal") || "Legal",
                links: [
                  { label: t("footer.terms_of_service") || "Terms of Service", href: "/terms" },
                  { label: t("footer.privacy_policy") || "Privacy Policy", href: "/privacy" },
                  { label: t("footer.cookie_policy") || "Cookie Policy", href: "/cookies" },
                  { label: t("footer.disclaimer") || "Disclaimer", href: "/disclaimer" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-white">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-riverflow-800 pt-6 flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400">
          <p>{t("footer.rights") || "© 2025 Riverflow Solutions FZ-LLC. All rights reserved."}</p>
          <p>
            {t("footer.designed") || "Designed and developed with"}{" "}
            <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
