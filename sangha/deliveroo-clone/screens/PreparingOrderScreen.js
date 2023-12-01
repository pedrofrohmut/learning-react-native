import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import { SafeAreaView } from "react-native"
import * as Animatable from "react-native-animatable"
import ProgressCircle from "react-native-progress/Circle"

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 1000)
    }, [])

    return (
        <SafeAreaView style={css.pageContainer}>
            {/* Loading Image */}
            <Animatable.Image
                source={require("../assets/loading.gif")}
                animation="slideInUp"
                style={css.loadingImage}
            />

            {/* Loading Text */}
            <Animatable.Text animation="slideInUp" style={css.loadingText}>
                Waiting for the restaurant to accept your order!
            </Animatable.Text>

            {/* Spinning Circle */}
            <Animatable.View animation="slideInUp">
                <ProgressCircle size={60} indeterminate={true} color="#666" />
            </Animatable.View>
        </SafeAreaView>
    )
}

const css = {
    pageContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        minHeight: "100vh"
    },
    loadingImage: {
        height: "24rem",
        width: "24rem"
    },
    loadingText: {
        fontSize: "1.0rem",
        fontWeight: 700,
        color: "#666",
        textAlign: "center",
        marginVertical: "2.5rem"
    }
}

export default PreparingOrderScreen
