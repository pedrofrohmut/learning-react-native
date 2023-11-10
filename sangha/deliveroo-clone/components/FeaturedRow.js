import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/solid"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import sanityClient from "../sanity"

const query = `
* [_type == "featured" && _id == $id] {
    Restaurants[] -> {
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

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(query, { id: id }).then(data => {
            console.log("Id", id)
            console.log("Restaurant by id", data)
            setRestaurants(data?.Restaurants)
        })
    }, [])

    console.log("Restaurants", restaurants)

    return (
        <View style={css.container}>
            {/* Title */}
            <View style={css.titleContainer}>
                <Text style={css.titleText}>{title}</Text>
                <ArrowRightIcon color="#00ccbb" />
            </View>

            {/* Description */}
            <Text style={css.descriptionText}>{description}</Text>

            {/* Restaurant Cards */}
            <ScrollView
                horizontal
                contentContainerStyle={css.innerScrollView}
                style={css.outerScrollView}
                showsHorizontalScrollIndicator={true}
            >
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        title={restaurant.name}
                        imageUrl={restaurant.image}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        shortDescription={restaurant.short_description}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

const css = {
    titleContainer: {
        flexDirection: "row",
        marginTop: "1rem",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "1rem"
    },
    titleText: {
        fontWeight: 700,
        fontSize: "1.2rem"
    },
    descriptionText: {
        fontSize: "1rem",
        color: "#666",
        paddingHorizontal: "1rem"
    },
    innerScrollView: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    outerScrollView: {
        paddingTop: "1rem"
    }
}

export default FeaturedRow
