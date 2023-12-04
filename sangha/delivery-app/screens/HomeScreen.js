import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { View, Text, Image, SafeAreaView, Platform } from "react-native"

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
            {/* Header */}
            <View>
                <Image
                    source={{ uri: DELIVERY_BIKE_IMAGE }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
            </View>
        </MySafeAreaView>
    )
}

export default HomeScreen
