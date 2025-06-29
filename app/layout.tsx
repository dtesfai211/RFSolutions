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

import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Riverflow Solutions FZ-LLC - UAE Business Setup Services",
  description: "Your trusted partner for business setup and company formation services in the UAE.",
}


export function ChatbaseWidget() {
  return (
    <>
      <Script id="chatbase-config" strategy="afterInteractive">
        {`
          (function(){
            if(!window.chatbase || window.chatbase("getState") !== "initialized"){
              window.chatbase = (...args) => {
                if(!window.chatbase.q){ window.chatbase.q = [] }
                window.chatbase.q.push(args)
              };
              window.chatbase = new Proxy(window.chatbase, {
                get(target, prop){
                  if(prop === "q"){ return target.q }
                  return (...args) => target(prop, ...args)
                }
              });
            }

        const onLoad = function(){
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "pLpNF2hFWqTRasgidoZd2";
        script.domain = "www.chatbase.co";
        document.body.appendChild(script);

        script.onload = () => {
          window.chatbase('config', {
            //Customization options:
            chatTitle: "Riverflow Chat Assistant",
            primaryColor: "#003366", // Riverflow dark blue
            welcomeMessage: "Hello 👋🏼! How can we assist you today?",
            position: "right", // or "left"
            iconSize: "medium", // small | medium | large
            iconStyle: "modern", // modern | classic
            backgroundColor: "#ffffff",
            textColor: "#333333",
            hideChatIconOnMobile: false,
          });
        };
      };

      if(document.readyState === "complete"){
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
      }
    })();
  `}
      </Script>
    </>
  )
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

        {/* Chatbase config setup (must come before script load) */}

        <ChatbaseWidget />
      </body>
    </html>
  )
}
