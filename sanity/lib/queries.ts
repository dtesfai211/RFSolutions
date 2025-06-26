import { groq } from "next-sanity"

export const headerQuery = groq`
*[_type == "header"][0] {
  phoneNumber,
  navLinks,
  services,
  ctaLabel
}
`
export const blogPostQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  excerpt,
  "author": author->name,
  mainImage {
    asset->{
      url
    }
  },
  body
}`