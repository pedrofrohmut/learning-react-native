import { Image, Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"
import { urlFor } from "../sanity"
import { removeItemFromBasket } from "../redux/actions/basketActions"
import { useDispatch } from "react-redux"

const BasketListItem = ({ item }) => {
    const dispatch = useDispatch()

    const { amount } = item
    const { id, imageUrl, name, price } = item.value

    // console.log("BasketListItem", item)

    return (
        <View className="flex-row space-x-3 items-center px-3 py-2 bg-white mb-2 rounded-md">
            <Text>{amount}</Text>

            <Image source={{ uri: urlFor(imageUrl).url() }} className="w-12 h-12 rounded-md" />

            <Text className="flex-1">{name}</Text>

            <Text>
                <Currency quantity={price} currency="GBP" />
            </Text>

            <TouchableOpacity
                onPress={() => removeItemFromBasket(dispatch, id)}
                className="px-2 py-1 rounded-md"
            >
                <Text className="text-red-600 text-xs">Remove</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketListItem
