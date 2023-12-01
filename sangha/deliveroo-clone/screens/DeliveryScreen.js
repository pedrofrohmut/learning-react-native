import { useNavigation } from "@react-navigation/native"
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import { restaurantSelector } from "../redux/slices/restaurantSlice"
import { XMarkIcon } from "react-native-heroicons/solid"
import ProgressBar from "react-native-progress/Bar"

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(restaurantSelector)

    return (
        <SafeAreaView style={css.pageContainer}>
            <View style={css.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="#fff" size={30} />
                </TouchableOpacity>
                <Text style={css.headerText}>Order Help</Text>
            </View>

            <View style={css.estimatedContainer}>
                <View style={css.estimatedInnerContainer}>
                    <View>
                        <Text style={css.estimatedText1}>Estimated Arrival</Text>
                        <Text style={css.estimatedText2}>45-55 minutes</Text>
                    </View>

                    <Image
                        source={{ uri: "https://links.papareact.com/fls" }}
                        style={css.estimatedImage}
                    />
                </View>

                <ProgressBar width={270} height={8} color="#0cb" indeterminate={true} />

                <Text style={css.estimatedText3}>Your order at {restaurant.title} is being prepared</Text>
            </View>
        </SafeAreaView>
    )
}

const css = {
    pageContainer: {
        backgroundColor: "#0cb",
        flex: 1,
        zIndex: 2,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem",
    },
    headerText: {
        fontSize: "1.2rem",
        color: "#fff",
        fontWeight: 300,
    },
    estimatedContainer: {
        backgroundColor: "#fff",
        marginHorizontal: "1.25rem",
        marginVertical: "0.5rem",
        borderRadius: "12px",
        padding: "1.5rem",
        zIndex: 2,
        boxShadow: "#888 3px 3px 6px",
    },
    estimatedInnerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    estimatedText1: {
        fontSize: "1.2rem",
        color: "#666",
    },
    estimatedText2: {
        fontSize: "2.5rem",
        fontWeight: 700,
    },
    estimatedImage: {
        height: "5rem",
        width: "5rem",
    },
    estimatedText3: {
        color: "#666",
        fontSize: "1rem",
        marginTop: "0.75rem",
    }
}

export default DeliveryScreen
