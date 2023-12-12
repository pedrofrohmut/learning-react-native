import { Image, Text, TouchableOpacity, View } from "react-native"
import { XMarkIcon } from "react-native-heroicons/solid"
import ProgressBar from "react-native-progress/Bar"

import { useSelector } from "react-redux"
import { restaurantSelector } from "../redux/selectors/restaurantSelectors"

import MySafeAreaView from "../components/MySafeAreaView"
import { DELIVERY_BIKE_IMAGE2 } from "../contants"

const DeliveryScreen = () => {
    const restaurant = useSelector(restaurantSelector)
    return (
        <View className="bg-[#0cb] flex-1">
            <MySafeAreaView>
                <View className="flex-1 z-50">
                    {/* Order Help & Home Btn */}
                    <View className="flex-row items-center py-2 px-4 justify-between mb-3 mt-2 mx-2">
                        <Text className="font-light text-white text-lg">Order Help</Text>
                        <TouchableOpacity
                            className="flex-row items-center space-x-2 bg-[#6664] py-1 px-2 rounded-md"
                            onPress={() => navigation.navigate("HomeScreen")}
                        >
                            <XMarkIcon size={25} color="#fff" />
                            <Text className="text-white">Home</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Delivery Info */}
                    <View className="bg-white mx-5 px-5 py-3 rounded-md shadow-md z-50">
                        <View className="flex-row items-center justify-between mb-2">
                            <View>
                                <Text className="text-lg text-gray-600">Estimated Arrival</Text>
                                <Text className="text-3xl font-extrabold text-gray-800">
                                    45-55 minutes
                                </Text>
                            </View>
                            <Image source={{ uri: DELIVERY_BIKE_IMAGE2 }} className="h-20 w-20" />
                        </View>

                        <ProgressBar width={270} height={8} color="#0cb" indeterminate={true} />

                        <Text className="text-sm text-gray-500 mt-3">Your order at {restaurant.name} is being prepared</Text>
                    </View>
                </View>
            </MySafeAreaView>
        </View>
    )
}

export default DeliveryScreen
