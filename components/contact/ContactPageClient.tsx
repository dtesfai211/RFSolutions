"use client"

import { useEffect } from "react"
import ContactCard from "./ContactCard"
import { useTranslation } from "@/hooks/use-translation"
import type { SiteSettings } from "@/types/siteSettings"
import { Facebook, Twitter, Instagram, Linkedin, FileDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import React from "react"
import { StaticImport } from "next/dist/shared/lib/get-img-props" 
import SocialLinks from "../SocialLinks"


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



  const { t } = useTranslation()
  const socials = settings.socials || [];

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
      <SocialLinks socials={socials} />
    </div>
  )
}
