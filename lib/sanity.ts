import { createClient } from "next-sanity"

export const sanityClient = createClient({
  projectId: "g5psyem8",
  dataset: "production",
  apiVersion: "2025-06-27", // use today's date or your last schema update
  useCdn: true, // `false` if you want fresh data
})

// sanity.ts
export const blogQuery = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        _id,
        url
      }
    },
    excerpt,
    "author": author->name
  }`

export const categoriesWithPostsQuery = `
*[_type == "category"]{
  _id,
  title,
  slug,
  mainImage,
  "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "tags": tags[]->{
      title,
      "slug": slug.current
    }
  }
}
`

export const categoryPostsQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    description,
    "slug": slug.current,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage {
        asset->{
          url
        },
        alt
      }
    }
  }
`
export const featuredCategoriesQuery = `
  *[_type == "category" && featured == true] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`
export const postsByTagQuery = (tag: string) => `
*[_type == "post" && $tag in tags[]] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset->{ url },
    alt
  }
}
`
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    whatsappEnabled,
    whatsappNumber,
    whatsappMessage
  }
`