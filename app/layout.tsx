// app/layout.tsx

import type React from "react"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton"
import "@/app/globals.css"
import { getSiteSettings } from "@/lib/getSiteSettings" // import helper 
import type { SiteSettings } from "@/types/siteSettings"
import Chatbot from "@/components/chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Riverflow Solutions FZ-LLC - UAE Business Setup Services",
  description: "Your trusted partner for business setup and company formation services in the UAE.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const settings: SiteSettings = await getSiteSettings()

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header settings={settings} />
            <main className="flex-1">{children}</main>
            <Footer settings={settings} />
          </div>
        </LanguageProvider>

        {/* Only show button if enabled */}
        <FloatingWhatsAppButton settings={settings} />
        <Chatbot/>
      </body>
    </html>
  )
}
