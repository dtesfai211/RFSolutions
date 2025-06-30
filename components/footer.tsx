"use client"

import Link from "next/link"
import RiverflowLogo from "./riverflow-logo"
import { useTranslation } from "@/hooks/use-translation" 
import type { SiteSettings } from "@/types/siteSettings"
import Image from "next/image"

import NewsletterForm from "@/components/NewsletterForm"
import SocialLinks from "./SocialLinks"

 
export default function Footer({ settings }: { settings: SiteSettings }) {
  const { t } = useTranslation()

  return (
    <footer className="relative bg-gradient-to-tr from-[#0a0f1e] via-[#131c33] to-[#1a2742] text-white overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-gradient-to-r from-riverflow-400 via-white/40 to-riverflow-400 blur-sm opacity-60 z-20 rounded-full" />

      <div className="relative z-10 container px-4 md:px-6 py-16 space-y-12">
        {/* Logo & Description & Socials & Newsletter */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="max-w-md space-y-5">
            <Link href="/" className="flex items-center gap-2" aria-label="Home">
              {settings.logo?.asset?.url ? (
                <Image
                  src={settings.logo.asset.url}
                  alt={settings.siteTitle || "Riverflow Logo"}
                  width={600}
                  height={600}
                  className="h-30 w-60 object-contain drop-shadow-xl brightness-125 contrast-110"
                  priority
                />
              ) : (

                <RiverflowLogo className="h-26 w-auto drop-shadow-lg text-white brightness-125" />

              )}
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t("footer.description") ||
                "Your trusted partner for business setup and company formation services in the UAE."}
            </p>

            {/* Socials */}
            {settings?.showSocialIcons && Array.isArray(settings.socials) && settings.socials.length > 0 && (
              <div className="flex gap-3">
                <SocialLinks socials={settings.socials} />
              </div>
            )}


            {/* Newsletter */}
            {settings?.showNewsletterSignup && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">Subscribe to our Newsletter</h3>
                <p className="text-sm text-slate-300">Stay updated with the latest news, tips, and special offers from Riverflow Solutions.</p>
                <NewsletterForm />
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
            {[ // Grouped section
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
                  ...(settings.termsUrl
                    ? [{ label: t("footer.terms_of_service") || "Terms of Service", href: settings.termsUrl }]
                    : []),
                  ...(settings.privacyUrl
                    ? [{ label: t("footer.privacy_policy") || "Privacy Policy", href: settings.privacyUrl }]
                    : []),
                  { label: t("footer.cookie_policy") || "Cookie Policy", href: "/cookies" },
                  { label: t("footer.disclaimer") || "Disclaimer", href: "/disclaimer" },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-semibold text-white/90 mb-2 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-slate-300 hover:text-white transition-colors"
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
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:justify-between text-sm text-slate-400">
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
