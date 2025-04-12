"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    <div className={`flex min-h-screen flex-col ${isRTL ? "rtl" : "ltr"}`}>
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("privacy.title") || "Privacy Policy"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("privacy.description") || "Last updated: April 12, 2025"}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p className="text-gray-500">
                  Riverflow Solutions FZ-LLC ("we", "our", or "us") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, and share your personal information when you use our
                  website or services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <p className="text-gray-500">
                  We collect information you provide directly to us, such as your name, email address, phone number, and
                  other contact details when you fill out forms on our website, contact us, or use our services.
                </p>
                <p className="text-gray-500">
                  We also automatically collect certain information when you visit our website, including your IP
                  address, browser type, operating system, and browsing behavior.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                <p className="text-gray-500">
                  We use your information to provide and improve our services, communicate with you, process
                  transactions, and comply with legal obligations. We may also use your information for marketing
                  purposes, but you can opt out at any time.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Information Sharing</h2>
                <p className="text-gray-500">
                  We may share your information with service providers who help us operate our business, with your
                  consent, or as required by law. We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Data Security</h2>
                <p className="text-gray-500">
                  We implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Your Rights</h2>
                <p className="text-gray-500">
                  Depending on your location, you may have certain rights regarding your personal information, such as
                  the right to access, correct, or delete your data. To exercise these rights, please contact us at
                  privacy@riverflow.ae.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Cookies</h2>
                <p className="text-gray-500">
                  We use cookies and similar technologies to enhance your experience on our website. You can manage your
                  cookie preferences through your browser settings.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Changes to This Policy</h2>
                <p className="text-gray-500">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new policy on our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about this Privacy Policy, please contact us at privacy@riverflow.ae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
