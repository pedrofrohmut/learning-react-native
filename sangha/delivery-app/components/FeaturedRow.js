import { useState, useEffect } from "react"
import { ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"

import RestaurantCard from "./RestaurantCard"
import { fetchRestaurantsByFeaturedId, urlFor } from "../sanity"

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetchRestaurantsByFeaturedId(id).then((data) => {
            setRestaurants(data)
        })
    }, [])

    // console.log("FeaturedRow", restaurants)

    return (
        <View className="mb-3">
            <View className="flex-row items-center justify-between">
                <View>
                    <Text className="font-bold text-2xl text-black">{title}</Text>
                    <Text className="text-sm text-gray-700 mb-3">{description}</Text>
                </View>
                <ArrowRightIcon size={35} color="#0cb" />
            </View>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: "1rem",
                    paddingTop: "0.75rem",
                    paddingBottom: "1.5rem"
                }}
                horizontal
                className="pb-2"
                showsHorizontalScrollIndicator
            >
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        title={restaurant.name}
                        imageUrl={urlFor(restaurant.image).url()}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default FeaturedRow
