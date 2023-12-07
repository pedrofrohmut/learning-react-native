import { Text, TouchableOpacity, Image, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MapPinIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"

const RestaurantCard = ({ id, imageUrl, title, rating, genre, address }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id })}
            className="mr-3 bg-white"
        >
            <Image source={{ uri: imageUrl }} className="h-36 w-64 rounded-sm mb-1" />

            <View className="pt-2 px-2 pb-4">
                <Text className="font-bold text-xl mb-1">{title}</Text>

                <View className="flex-row items-center space-x-2">
                    <StarIcon color="#0cb" opacity={0.7} size={20} />
                    <Text className="text-base">{rating}</Text>
                    <Text className="text-gray-700 text-base">{genre}</Text>
                </View>

                <View className="flex-row items-center">
                    <MapPinIcon size={22} color="#666" opacity={0.7} />
                    <Text className="text-gray-500 text-base ml-2">At: {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard
