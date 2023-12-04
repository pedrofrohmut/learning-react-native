import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { View, Text, Image, SafeAreaView, Platform } from "react-native"
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline"

import { DELIVERY_BIKE_IMAGE } from "../contants"
import MySafeAreaView from "../components/MySafeAreaView"

const HomeScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <MySafeAreaView>
            <View className="flex-1 bg-white pt-5">
                {/* Header */}
                <View className="flex-row items-center mx-4 space-x-2">
                    <Image
                        source={{ uri: DELIVERY_BIKE_IMAGE }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />

                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-small">Delivery Now</Text>
                        <View className="flex-row">
                            <Text className="font-bold text-xl mr-2">Current location</Text>
                            <ChevronDownIcon size={20} color="#00ccbb" />
                        </View>
                    </View>

                    <UserIcon size={35} color="#0cb" />
                </View>
            </View>
        </MySafeAreaView>
    )
}

export default HomeScreen
