import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'oytjr20c', // Find this in sanity.io
  dataset: 'production',
  useCdn: true, // Use CDN for faster loading
  apiVersion: '2024-01-01',
})

// Helper for generating image URLs
const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}