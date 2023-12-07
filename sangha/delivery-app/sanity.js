import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: "lk0caseg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

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

export const fetchCategories = async () => {
    const query = `
        * [_type == "category"] {
            _id,
            image,
            name,
        }
    `
    const categories = await sanityClient.fetch(query)
    return categories
}

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
