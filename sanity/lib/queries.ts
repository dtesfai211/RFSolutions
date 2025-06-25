import { groq } from "next-sanity"

export const headerQuery = groq`
*[_type == "header"][0] {
  phoneNumber,
  navLinks,
  services,
  ctaLabel
}
`
