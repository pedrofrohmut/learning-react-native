import { useMemo } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { XMarkIcon } from "react-native-heroicons/solid"
import Currency from "react-currency-formatter"

import { useDispatch, useSelector } from "react-redux"
import { restaurantSelector } from "../redux/selectors/restaurantSelectors"
import { basketItemsSelector } from "../redux/selectors/basketSelectors"
import { calculateTotalFromBasket } from "../redux/utils/basketUtils"

import { DELIVERY_BIKE_IMAGE } from "../contants"
import MySafeAreaView from "../components/MySafeAreaView"
import BasketListItem from "../components/BasketListItem"

const BasketScreen = () => {
    const navigation = useNavigation()

    const dispatch = useDispatch()

    const restaurant = useSelector(restaurantSelector)
    const items = useSelector(basketItemsSelector)

    // Caches the value and only recalculate on items change
    const total = useMemo(() => calculateTotalFromBasket(items), [items])

    const deliveryFee = 4.5

    // console.log("BasketScreen", restaurant)

    return (
        <MySafeAreaView>
            {/* Page Container */}
            <View className="flex-1 bg-gray-300">
                {/* Header */}
                <View className="relative bg-white py-4 mb-4">
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-600">{restaurant.name}</Text>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute flex-row items-center space-x-1 top-4 right-4 bg-[#ccc8] p-1 rounded-md"
                    >
                        <XMarkIcon size={20} color="#0cb" />
                        <Text className="text-[#333] text-sm">Close</Text>
                    </TouchableOpacity>
                </View>

                {/* Delivery Info */}
                <View className="flex-row items-center bg-white mx-5 py-2 px-3 rounded-md mb-3">
                    <Image
                        source={{ uri: DELIVERY_BIKE_IMAGE }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                    <Text className="flex-1 text-center text-gray-700">
                        Delivery in 50 to 75 mins
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-[#0cb]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="flex-1 px-2 py-2">
                    {items.map((item) => (
                        <BasketListItem key={item.value.id} item={item} />
                    ))}
                </ScrollView>

                {/* Footer: Pricing Info */}
                <View className="bg-white py-3 px-4">
                    <View className="flex-row items-center justify-between py-1">
                        <Text className="text-gray-600">Subtotal</Text>
                        <Text className="text-gray-600">
                            <Currency quantity={total} currency="GBP" />
                        </Text>
                    </View>
                    <View className="flex-row items-center justify-between py-1">
                        <Text className="text-gray-600">Delivery Fee</Text>
                        <Text className="text-gray-600">
                            <Currency quantity={deliveryFee} currency="GBP" />
                        </Text>
                    </View>
                    <View className="flex-row items-center justify-between py-1 mb-3">
                        <Text className="text-gray-700 font-bold text-lg">Order total</Text>
                        <Text className="text-gray-700 font-bold text-lg">
                            <Currency quantity={total + deliveryFee} currency="GBP" />
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PreparingOrderScreen")}
                        className="rounded-lg bg-[#0cb] py-3"
                    >
                        <Text className="text-center text-lg text-white font-bold">
                            Place Order
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </MySafeAreaView>
    )
}

export default BasketScreen
