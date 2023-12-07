import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useEffect, useState } from "react"
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    QuestionMarkCircleIcon,
    StarIcon
} from "react-native-heroicons/solid"

import MySafeAreaView from "../components/MySafeAreaView"
import { fetchRestaurantById, urlFor } from "../sanity"
import { MapPinIcon } from "react-native-heroicons/outline"
import DishRow from "../components/DishRow"

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const [restaurant, setRestaurant] = useState(null)

    console.log("RestaurantScreen", route)

    const restaurantId = route.params.id

    useEffect(() => {
        fetchRestaurantById(restaurantId).then((data) => {
            setRestaurant(data)
        })
    }, [])

    console.log("RestaurantScreen - Restaurant: ", restaurant)

    if (restaurant == null) {
        return null
    }

    const { image, name, rating, address, short_description: description, dishes } = restaurant

    const imageUrl = urlFor(image).url()

    const genre = restaurant.type?.name || "Other"

    return (
        <MySafeAreaView>
            <View>
                <View>
                    <Image source={{ uri: imageUrl }} className="w-full h-56 bg-gray-500 p-4" />

                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="flex-row items-center space-x-2 absolute top-4 left-4 bg-[#ccc8] p-1 rounded-md"
                    >
                        <ArrowLeftIcon size={25} color="#333" />
                        <Text className="text-[#333] text-base">Back</Text>
                    </TouchableOpacity>
                </View>

                <View className="bg-white p-4">
                    <Text className="text-3xl font-extrabold mb-2">{name}</Text>

                    <View className="flex-row items-center space-x-3 opacity-80 mb-2">
                        <StarIcon size={22} color="green" />
                        <Text>{rating}</Text>
                        <Text>{genre}</Text>
                        <MapPinIcon size={25} color="#888" />
                        <Text>At: {address}</Text>
                    </View>

                    <Text className="text-gray-500 text-sm">{description}</Text>
                </View>

                <TouchableOpacity className="bg-white flex-row items-center justify-between px-4 py-2 border-y border-gray-500">
                    <QuestionMarkCircleIcon size={26} color="#888" />
                    <Text className="">Have a food alergy?</Text>
                    <ChevronRightIcon size={22} color="#0cb" />
                </TouchableOpacity>

                <View>
                    <Text className="text-3xl font-bold px-4 py-3">Menu</Text>

                    {dishes?.map((dish) => (
                        <DishRow
                            key={dish._id}
                            id={dish._id}
                            name={dish.name}
                            description={dish.short_description}
                            price={dish.price}
                            imageUrl={urlFor(dish.image).url()}
                        />
                    ))}
                </View>
            </View>
        </MySafeAreaView>
    )
}

export default RestaurantScreen
