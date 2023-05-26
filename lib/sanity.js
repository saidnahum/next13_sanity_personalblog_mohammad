import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export const sanityClient = createClient({
  apiVersion,
  projectId,
  dataset,
  useCdn: false
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source)
};