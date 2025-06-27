"use client"

import { useEffect } from "react"
import ContactCard from "./ContactCard"
import type { SiteSettings } from "@/types/siteSettings"
import { Facebook, Twitter, Instagram, Linkedin, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props"


export default function ContactPageClient({ settings }: { settings: SiteSettings }) {
  useEffect(() => {
    if (!settings) return

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: settings.siteTitle || "Riverflow",
      image: settings.logo?.asset?.url || undefined,
      telephone: settings.phone,
      email: settings.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: settings.address?.line1 || "",
        addressLocality: settings.address?.line2 || "",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      url: "https://www.riverflow.ae",
      sameAs: settings.socials?.map((s: { url: any }) => s.url),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.innerHTML = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [settings])

  const iconMap: Record<string, React.ReactNode> = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    instagram: <Instagram className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />,
  }

  function getAssetUrl(assetUrl: string | StaticImport): string {
    if (typeof assetUrl === "string") return assetUrl
    // @ts-ignore
    return assetUrl?.default || ""
  }


  return (
    <div className="space-y-12">
      <ContactCard settings={settings} />

      {/* Download Company Profile */}
      {settings.companyProfile?.asset?.url && (
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-riverflow-600 hover:bg-riverflow-700 text-white px-6 py-3 text-lg rounded-full shadow-md"
          >
            <a
              href={getAssetUrl(settings.companyProfile.asset.url)}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileDown className="w-5 h-5" />
              Download Company Profile (PDF)
            </a>

          </Button>
        </div>
      )}

      {/* Social Media Icons */}
      {settings.socials && settings.socials.length > 0 && (
        <div className="mt-8 text-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {settings.socials.map((social) => {
              const icon = iconMap[social.platform.toLowerCase()]
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-riverflow-600 hover:text-riverflow-700 transition-colors"
                >
                  {icon || <span>{social.platform}</span>}
                </a>
              )
            })}
          </div>
        </div>
      )}


    </div>
  )
}
