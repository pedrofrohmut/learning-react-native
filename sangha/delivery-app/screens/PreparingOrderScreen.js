import { useEffect } from "react"
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import * as Animatable from "react-native-animatable"
import ProgressCircle from "react-native-progress/Circle"

import MySafeAreaView from "../components/MySafeAreaView"

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen")
        }, 1000)
    }, [])

    return (
        <MySafeAreaView>
            <View className="items-center justify-center bg-white flex-1">
                {/* Loading Image */}
                <Animatable.Image
                    source={require("../assets/loading.gif")}
                    animation="slideInUp"
                    className="h-96 w-96"
                />

                {/* Loading Text */}
                <Animatable.Text
                    animation="slideInUp"
                    className="text-base font-bold text-gray-500 text-center my-6"
                >
                    Waiting for the restaurant to accept your order!
                </Animatable.Text>

                {/* Spinning Circle */}
                <Animatable.View animation="slideInUp">
                    <ProgressCircle size={60} indeterminate={true} color="#666" />
                </Animatable.View>
            </View>
        </MySafeAreaView>
    )
}

export default PreparingOrderScreen
