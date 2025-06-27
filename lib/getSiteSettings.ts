import { groq } from "next-sanity"
import { sanityClient } from "./sanity"
import type { SiteSettings } from "@/types/siteSettings"

export const getSiteSettings = async (): Promise<SiteSettings> => {
  const query = groq`*[_type == "siteSettings"][0]
  
  {
  logo {
        asset->{
          _id,
          url
        }
      }
  }
  
  `
  
  return await sanityClient.fetch(query)
}