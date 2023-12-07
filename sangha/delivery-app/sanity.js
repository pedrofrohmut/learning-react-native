import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: "lk0caseg",
    dataset: "production",
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: "2021-10-21" // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

/* REF EXAMPLES FROM SANITY CLIENT DOCS
 *
 * // uses GROQ to query content: https://www.sanity.io/docs/groq
 * export async function getPosts() {
 *   const posts = await client.fetch('*[_type == "post"]')
 *   return posts
 * }
 *
 * export async function createPost(post: Post) {
 *   const result = client.create(post)
 *   return result
 * }
 *
 * export async function updateDocumentTitle(_id, title) {
 *   const result = client.patch(_id).set({title})
 *   return result
 * }
 */

export const fetchFeaturedCategories = async () => {
    const query = `
        * [_type == "featured"] {
            _id,
            name,
            short_description,
        }
    `
    const featuredCategories = await sanityClient.fetch(query)
    return featuredCategories
}

export const fetchRestaurantsByFeaturedId = async (id) => {
    const query = `
        * [_type == "featured" && _id == $id] {
            restaurants[] -> {
                _id,
                name,
                image,
                rating,
                type -> {
                    name
                },
                address,
                short_description,
                dishes[] -> {
                    ...
                },
                lat,
                long
            }
        } [0]
    `
    const featuredCategory = await sanityClient.fetch(query, { id })
    return featuredCategory.restaurants || []
}

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
