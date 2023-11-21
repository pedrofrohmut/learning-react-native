import { Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"

import { useSelector } from "react-redux"
import { basketItemsSelector, basketTotal } from "../redux/slices/basketSlice"
import { useNavigation } from "@react-navigation/native"

const BasketIcon = () => {
    const items = useSelector(basketItemsSelector)
    const total = useSelector(basketTotal)
    const navigation = useNavigation()

    // if (items.length === 0) return null

    return (
        <View style={css.mainContainer}>
            {/* <Text>{JSON.stringify(items, null, 4)}</Text> */}
            <Text style={css.lengthText}>{items.length}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
                <Text style={css.linkText}>View Basket</Text>
            </TouchableOpacity>
            <Text style={css.totalText}>
                {"Total: "}
                <Currency quantity={total} currency="GBP" />
            </Text>
        </View>
    )
}

const css = {
    mainContainer: {
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        width: "calc(100% - 2rem)",
        padding: "0.6rem",
        backgroundColor: "#00ccbb",
        opacity: 0.85,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "5px"
    },
    lengthText: {
        color: "white",
        fontWeight: 900,
        fontSize: "1.6rem",
        backgroundColor: "#0002",
        paddingVertical: "0.3rem",
        paddingHorizontal: "0.6rem",
        borderRadius: "5px"
    },
    linkText: {
        color: "white",
        fontWeight: 700,
        fontSize: "1.2rem"
    },
    totalText: {
        color: "white",
        fontSize: "1.1rem",
        fontWeight: 700
    }
}

export default BasketIcon
