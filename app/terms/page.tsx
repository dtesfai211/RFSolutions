"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  const { language } = useLanguage()
  const { t } = useTranslation()
  const isRTL = language === "ar"

  return (
    
      <main className="flex-1">
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("terms.title") || "Terms of Service"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("terms.description") || "Last updated: April 12, 2025"}
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
                  Welcome to Riverflow Solutions FZ-LLC. These Terms of Service govern your use of our website and
                  services. By accessing our website or using our services, you agree to these terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Services</h2>
                <p className="text-gray-500">
                  Riverflow Solutions FZ-LLC provides business setup and company formation services in the UAE. Our
                  services include but are not limited to business registration, trade licensing, visa processing, and
                  banking support.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Fees and Payment</h2>
                <p className="text-gray-500">
                  Our fees are as described on our website or as quoted to you directly. Payment terms will be specified
                  in your service agreement. All fees are non-refundable unless otherwise stated.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Client Responsibilities</h2>
                <p className="text-gray-500">
                  Clients are responsible for providing accurate and complete information required for our services.
                  Delays or issues arising from incomplete or inaccurate information are the client's responsibility.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
                <p className="text-gray-500">
                  Riverflow Solutions FZ-LLC is not liable for any indirect, incidental, special, consequential, or
                  punitive damages resulting from your use of our services or website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Governing Law</h2>
                <p className="text-gray-500">
                  These Terms of Service are governed by the laws of the United Arab Emirates. Any disputes arising from
                  these terms will be subject to the exclusive jurisdiction of the courts of the UAE.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
                <p className="text-gray-500">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                  posting on our website. Your continued use of our services after any changes indicates your acceptance
                  of the modified terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about these Terms of Service, please contact us at legal@riverflow.ae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
  )
}
