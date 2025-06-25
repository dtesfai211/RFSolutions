import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Riverflow Solutions FZ-LLC - UAE Business Setup Services",
  description: "Your trusted partner for business setup and company formation services in the UAE.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}


import './globals.css'