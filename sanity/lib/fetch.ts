import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function fetchHeader() {
  const query = `*[_type == "header"][0]{
    navLinks[] { label, href },
    phoneNumber
  }`
  return await client.fetch(query)
}
