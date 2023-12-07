import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: "lk0caseg",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

// HomeScreen -> FeaturedRow
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

// HomeScreen -> FeaturedRow -> RestaurantCard
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
            }
        } [0]
    `
    const featuredCategory = await sanityClient.fetch(query, { id })
    return featuredCategory.restaurants || []
}

// HomeScreen -> Categories
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

// RestaurantScreen
export const fetchRestaurantById = async (id) => {
    const query = `
        * [_type == "restaurant" && _id == $id] {
            image,
            name,
            rating,
            type -> {
                ...,
            },
            address,
            short_description,
            dishes[]-> {
                ...,
            },
            long,
            lat,
        } [0]
    `
    const restaurant = await sanityClient.fetch(query, { id })
    return restaurant
}

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
