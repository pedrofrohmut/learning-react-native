import { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid"

import { addItemToBasket, removeItemFromBasket } from "../redux/actions/basketActions"
import { basketItemsSelector } from "../redux/selectors/basketSelectors"
import { useDispatch, useSelector } from "react-redux"

const getAmount = (items, itemId) => {
    const item = items.find((item) => item.value.id === itemId)
    return item ? item.amount : 0
}

const DishRow = ({ id, name, description, price, imageUrl }) => {
    const [isPressed, setIsPressed] = useState(false)

    const dispatch = useDispatch()

    const items = useSelector(basketItemsSelector)

    console.log("DishRow", items)

    return (
        <View>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className="flex-row items-center bg-white border border-gray-300 shadow-md px-3 py-2 mx-2 mb-2"
            >
                <View className="flex-1">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-500 mb-1">{description}</Text>
                    <Text className="text-gray-500">
                        <Currency currency="GBP" quantity={price} />
                    </Text>
                </View>

                <View>
                    <Image
                        source={{ uri: imageUrl }}
                        style={{ borderWidth: 1, borderColor: "#e5e5e5" }}
                        className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </TouchableOpacity>

            {isPressed && (
                <View className="flex-row items-center justify-center space-x-3 pb-2">
                    <TouchableOpacity onPress={() => removeItemFromBasket(dispatch, id)}>
                        <MinusCircleIcon size={28} color="#0cb" />
                    </TouchableOpacity>

                    <Text className="text-lg">
                        {items.length === 0 ? "0" : getAmount(items, id)}
                    </Text>

                    <TouchableOpacity
                        onPress={() =>
                            addItemToBasket(dispatch, { id, name, description, price, imageUrl })
                        }
                    >
                        <PlusCircleIcon size={28} color="#0cb" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )
}

export default DishRow
