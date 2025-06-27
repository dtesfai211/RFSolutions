import { StaticImport } from "next/dist/shared/lib/get-img-props"

// types/siteSettings.ts
export type SiteSettings = {
  siteTitle?: string
  logo?: {
    asset: {
      url: string | StaticImport
      _ref: string
      _type: string
    }
  }
  metaTitle?: string
  metaDescription?: string
  openGraphImage?: {
    asset: {
      _ref: string
      _type: string
    }
  }

  phone?: string
  email?: string
  address?: string

  showNewsletterSignup?: boolean
  showSocialIcons?: boolean

  whatsappEnabled?: boolean
  whatsappNumber?: string
  whatsappMessage?: string

  termsUrl?: string
  privacyUrl?: string
}
