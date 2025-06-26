// app/layout.tsx

import type React from "react"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Riverflow Solutions FZ-LLC - UAE Business Setup Services",
  description: "Your trusted partner for business setup and company formation services in the UAE.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/87190919991" // 🔁 Replace with your number (no +)
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 2.118.553 4.1 1.508 5.832L0 24l6.326-1.658A11.964 11.964 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.742 17.105c-.245.688-1.437 1.36-2.027 1.448-.547.08-1.236.114-1.996-.123-.459-.14-1.05-.343-1.802-.7-3.167-1.47-5.242-4.73-5.397-4.957-.153-.228-1.287-1.716-1.287-3.275s.812-2.346 1.105-2.67c.284-.305.63-.382.84-.382.21 0 .42.002.603.011.195.008.457-.073.716.547.245.599.832 2.074.905 2.221.073.147.122.323.023.519-.098.196-.147.321-.29.497-.145.176-.306.392-.437.528-.143.148-.292.308-.127.61.164.303.73 1.202 1.562 1.946 1.073.982 1.978 1.287 2.28 1.43.303.143.478.122.654-.073.176-.196.752-.875.953-1.174.2-.296.4-.244.68-.147.28.098 1.763.831 2.064.982.3.15.5.23.572.358.072.128.072.745-.173 1.434z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
