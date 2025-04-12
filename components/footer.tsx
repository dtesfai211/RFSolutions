import Link from "next/link"
import RiverflowLogo from "./riverflow-logo"
import { useTranslation } from "@/hooks/use-translation"

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t bg-riverflow-900 text-white relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-riverflow-700 to-transparent opacity-20 z-0"></div>
      <div className="container flex flex-col gap-6 py-8 md:py-12 lg:py-16 px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-4">
            <RiverflowLogo />
            <p className="text-sm text-gray-300">
              {t("footer.description") ||
                "Your trusted partner for business setup and company formation services in the UAE."}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-riverflow-300 hover:text-riverflow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-riverflow-300 hover:text-riverflow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-riverflow-300 hover:text-riverflow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-riverflow-300 hover:text-riverflow-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">{t("footer.company") || "Company"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.about_us") || "About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.our_team") || "Our Team"}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.blog") || "Blog"}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.contact") || "Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">{t("footer.services") || "Services"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/business-formation" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.business_setup") || "Business Setup"}
                  </Link>
                </li>
                <li>
                  <Link href="/services/visa-services" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.visa_processing") || "Visa Processing"}
                  </Link>
                </li>
                <li>
                  <Link href="/services/banking-support" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.bank_account") || "Bank Account"}
                  </Link>
                </li>
                <li>
                  <Link href="/services/trade-licensing" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.trademark_registration") || "Trademark Registration"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">{t("footer.resources") || "Resources"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.faq") || "FAQ"}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.pricing") || "Pricing"}
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.guides") || "Guides"}
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.support") || "Support"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">{t("footer.legal") || "Legal"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.terms_of_service") || "Terms of Service"}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.privacy_policy") || "Privacy Policy"}
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.cookie_policy") || "Cookie Policy"}
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-300 hover:text-riverflow-300">
                    {t("footer.disclaimer") || "Disclaimer"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-300">
            {t("footer.rights") || "© 2025 Riverflow Solutions FZ-LLC. All rights reserved."}
          </p>
          <p className="text-xs text-gray-300">
            {t("footer.designed") || "Designed and developed with"} <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
