import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type SiteSettings = {
  socialLinks: any
  companyProfile?: {
    asset: {
      url: string
    }
  }

  socials?: {
    platform: string
    url: string
  }[]

  siteTitle?: string
  logo?: {
    asset: {
      url: string | StaticImport
      _ref?: string
      _type?: string
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

  contactName: string
  contactPosition: string
  phone: string
  email: string
  address: {
    line1: string
    line2: string
  }

  workingHours: {
    weekdays: string
    saturday: string
  }

  showNewsletterSignup?: boolean
  showSocialIcons?: boolean

  whatsappEnabled?: boolean
  whatsappNumber?: string
  whatsappMessage?: string

  termsUrl?: string
  privacyUrl?: string
}
