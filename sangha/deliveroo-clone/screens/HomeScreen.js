import { View, Text, SafeAreaView, Image } from "react-native"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline"

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView style={css.safeArea}>
            {/* Header */}
            <View style={css.container}>
                <Image source={{ uri: "https://links.papareact.com/wru" }} style={css.image} />
                <View style={css.midContainer}>
                    <Text style={css.deliveryText}>Deliver Now!</Text>
                    <Text style={css.locationText}>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
        </SafeAreaView>
    )
}

const css = {
    safeArea: {
        backgroundColor: "#fff",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        border: "2px dashed #faa",
        padding: "1rem"
    },
    image: {
        height: "70px",
        width: "70px",
        marginRight: "0.9rem",
        borderRadius: "50%",
        backgroundColor: "#d5d5d5",
    },
    midContainer: {
        flex: 1,
    },
    deliveryText: {
        fontWeight: 700,
        color: "#aaa",
        fontSize: "0.9rem"
    },
    locationText: {
        fontWeight: 700,
        fontSize: "1.3rem"
    }
}

export default HomeScreen
