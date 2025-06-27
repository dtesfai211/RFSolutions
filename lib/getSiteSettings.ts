import { groq } from "next-sanity"
import { sanityClient } from "./sanity"

export const getSiteSettings = async () => {
  const query = groq`*[_type == "siteSettings"][0]`
  return await sanityClient.fetch(query)
}