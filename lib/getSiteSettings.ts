import { groq } from "next-sanity"
import { sanityClient } from "./sanity"
import type { SiteSettings } from "@/types/siteSettings"

export const getSiteSettings = async (): Promise<SiteSettings> => {
  const query = groq`
  *[_type == "siteSettings"][0]{
    siteTitle,
    logo {
      asset-> {
        url
      }
    },
    metaTitle,
    metaDescription,
    openGraphImage {
      asset-> {
        url
      }
    },
    contactName,
    contactPosition,
    phone,
    email,
    address,
    workingHours,
    showNewsletterSignup,
    showSocialIcons,
    socials,
    whatsappEnabled,
    whatsappNumber,
    whatsappMessage,
    termsUrl,
    privacyUrl,
    companyProfile {
      asset-> {
        url
      }
    }
  }
`

  
  return await sanityClient.fetch(query)
}