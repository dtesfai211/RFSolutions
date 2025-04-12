"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiePolicyPage() {
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
                  {t("cookies.title") || "Cookie Policy"}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("cookies.description") || "Last updated: April 12, 2025"}
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
                  This Cookie Policy explains how Riverflow Solutions FZ-LLC ("we", "our", or "us") uses cookies and
                  similar technologies on our website. This policy should be read alongside our Privacy Policy, which
                  explains how we use personal information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. What Are Cookies?</h2>
                <p className="text-gray-500">
                  Cookies are small text files that are stored on your device when you visit a website. They are widely
                  used to make websites work more efficiently and provide information to the website owners.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>
                <p className="text-gray-500">We use the following types of cookies on our website:</p>
                <ul className="list-disc pl-6 text-gray-500 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation and access to secure areas of the
                    website.
                  </li>
                  <li>
                    <strong>Analytical/Performance Cookies:</strong> These cookies allow us to recognize and count the
                    number of visitors and see how visitors move around our website. This helps us improve the way our
                    website works.
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced
                    functionality and personalization. They may be set by us or by third-party providers whose services
                    we have added to our pages.
                  </li>
                  <li>
                    <strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you
                    have visited, and the links you have followed. We may use this information to make our website and
                    the advertising displayed on it more relevant to your interests.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Third-Party Cookies</h2>
                <p className="text-gray-500">
                  Some cookies are placed by third parties on our website. These third parties may include analytics
                  providers, advertising networks, and social media platforms. We do not control the operation of
                  third-party cookies.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Managing Cookies</h2>
                <p className="text-gray-500">
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse
                  cookies, or to alert you when cookies are being sent. The methods for doing so vary from browser to
                  browser, so we recommend you consult the help function in your browser.
                </p>
                <p className="text-gray-500">
                  Please note that if you choose to block or delete cookies, you may not be able to use all the features
                  of our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Changes to This Policy</h2>
                <p className="text-gray-500">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the
                  new policy on our website.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Contact Us</h2>
                <p className="text-gray-500">
                  If you have any questions about this Cookie Policy, please contact us at privacy@riverflow.ae.
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
