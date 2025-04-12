"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DisclaimerPage() {
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
                  {t("disclaimer.title") || "Disclaimer"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("disclaimer.description") || "Last updated: April 12, 2025"}
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
                  The information provided on this website is for general informational purposes only. All information
                  on the site is provided in good faith, however, we make no representation or warranty of any kind,
                  express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or
                  completeness of any information on the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. No Professional Advice</h2>
                <p className="text-gray-500">
                  The information on this website is not intended to be a substitute for professional advice. You should
                  not take action based solely on the information provided on this website. Before making any decisions
                  or taking any actions that might affect your business, you should consult with a qualified
                  professional advisor.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. External Links</h2>
                <p className="text-gray-500">
                  This website may contain links to external websites that are not provided or maintained by us. We do
                  not guarantee the accuracy, relevance, timeliness, or completeness of any information on these
                  external websites.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Errors and Omissions</h2>
                <p className="text-gray-500">
                  While we strive to keep the information on this website up to date and correct, we make no
                  representations or warranties of any kind, express or implied, about the completeness, accuracy,
                  reliability, suitability, or availability with respect to the website or the information, products,
                  services, or related graphics contained on the website for any purpose.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Fair Use Disclaimer</h2>
                <p className="text-gray-500">
                  This website may use copyrighted material which has not always been specifically authorized by the
                  copyright owner. We are making such material available for criticism, comment, news reporting,
                  teaching, scholarship, or research. We believe this constitutes a "fair use" of any such copyrighted
                  material as provided for in section 107 of the United States Copyright Law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Views Expressed</h2>
                <p className="text-gray-500">
                  The views and opinions expressed on this website are purely those of the authors and do not
                  necessarily reflect the official policy or position of any other agency, organization, employer, or
                  company, including Riverflow Solutions FZ-LLC.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to This Disclaimer</h2>
                <p className="text-gray-500">
                  We may update this Disclaimer from time to time. We will notify you of any changes by posting the new
                  Disclaimer on this page.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about this Disclaimer, please contact us at legal@riverflow.ae.
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
