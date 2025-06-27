import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'g5psyem8', // find this in sanity.json or your Sanity dashboard
  dataset: 'production', // or your dataset name
  apiVersion: '2025-06-27', // use current date or specific version
  useCdn: process.env.NODE_ENV === 'production', // use CDN for faster, stale data in prod
  token: process.env.SANITY_API_TOKEN, // optional, for write access
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
