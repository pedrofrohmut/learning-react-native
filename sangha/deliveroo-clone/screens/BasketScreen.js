import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"

import { useDispatch, useSelector } from "react-redux"
import { restaurantSelector } from "../redux/slices/restaurantSlice"
import {
    basketItemsSelector,
    basketTotalSelector,
    removeBasketItem
} from "../redux/slices/basketSlice"
import { XCircleIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import { urlFor } from "../sanity"

const BasketScreen = () => {
    const restaurant = useSelector(restaurantSelector)
    const items = useSelector(basketItemsSelector)
    const basketTotal = useSelector(basketTotalSelector)

    const navigation = useNavigation()

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={css.pageContainer}>
            {/* Header */}
            <View style={css.header}>
                <Text style={css.headerText1}>Basket</Text>
                <Text style={css.headerText2}>{restaurant.title}</Text>

                <TouchableOpacity onPress={navigation.goBack} style={css.goBackBtn}>
                    <XCircleIcon color="#00ccbb" height={50} width={50} />
                </TouchableOpacity>
            </View>

            {/* Delivery text */}
            <View style={css.deliveryContainer}>
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    style={css.deliveryImage}
                />

                <Text style={css.deliveryText}>Deliver in 50 to 75 min</Text>

                <TouchableOpacity>
                    <Text style={css.changeText}>Change</Text>
                </TouchableOpacity>
            </View>

            {/* Basket items list */}
            <ScrollView style={css.itemsScrollView}>
                {items.map((item) => (
                    <View key={item.value.id} style={css.itemContainer}>
                        <Text>{item.amount}</Text>

                        <Image
                            source={{ uri: urlFor(item.value.image).url() }}
                            style={css.itemImage}
                        />

                        <Text>{item.value.name}</Text>

                        <Text style={css.currencyText}>
                            <Currency quantity={item.value.price} currency="GBP" />
                        </Text>

                        <TouchableOpacity onPress={() => dispatch(removeBasketItem(item.value.id))}>
                            <Text style={css.removeBtn}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            {/* Footer: Total Values */}
            <View style={css.footerContainer}>
                <View style={css.footerRow}>
                    <Text style={css.footerText}>Subtotal</Text>
                    <Text style={css.footerCurrencyText}>
                        <Currency quantity={basketTotal} currency="GBP" />
                    </Text>
                </View>

                <View style={css.footerRow}>
                    <Text style={css.footerText}>Delivery Fee</Text>
                    <Text style={css.footerCurrencyText}>
                        <Currency quantity={5.99} currency="GBP" />
                    </Text>
                </View>

                <View style={css.footerRow}>
                    <Text style={css.footerText}>Order Total</Text>
                    <Text style={{ ...css.footerCurrencyText, ...css.totalText }}>
                        <Currency quantity={basketTotal + 5.99} currency="GBP" />
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("PreparingOrder")}
                    style={css.footerBtn}
                >
                    <Text style={css.footerBtnText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const css = {
    pageContainer: {
        flexDirection: "column",
        border: "1px dashed red",
        minHeight: "100vh"
    },
    header: {
        padding: "1rem",
        borderBottom: "1px solid #0cb",
        backgroundColor: "white",
        boxShadow: "0px 0px 7px #888"
    },
    headerText1: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: "1.5rem"
    },
    headerText2: {
        fontSize: "1.2rem",
        textAlign: "center",
        color: "#666"
    },
    goBackBtn: {
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        position: "absolute",
        top: "0.8rem",
        right: "0.6rem"
    },
    deliveryContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: "0.75rem",
        paddingHorizontal: "1.25rem",
        backgroundColor: "#fff",
        marginVertical: "1.25rem",
        marginHorizontal: "1rem"
    },
    deliveryImage: {
        height: "1.8rem",
        width: "1.8rem",
        padding: "1rem",
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        marginRight: "0.5rem"
    },
    deliveryText: {
        flex: "1"
    },
    changeText: {
        color: "#0cb"
    },
    itemsContainer: {
        flex: 1
    },
    itemsScrollView: {
        flex: "1"
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: "0.5rem",
        paddingHorizontal: "2.5rem",
        marginHorizontal: "1rem",
        marginBottom: "1rem"
    },
    itemImage: {
        height: "2.5rem",
        width: "2.5rem",
        borderRadius: "50%"
    },
    removeBtn: {
        fontSize: "0.8rem",
        color: "#0cb"
    },
    footerContainer: {
        padding: "1.25rem",
        backgroundColor: "#fff"
    },
    footerRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: "0.5rem"
    },
    footerText: {
        color: "#999",
        fontSize: "1.0rem",
        fontWeight: 700
    },
    footerCurrencyText: {
        color: "#999",
        fontSize: "1.0rem",
        fontWeight: 700
    },
    totalText: {
        color: "#000",
        fontWeight: 900
    },
    footerBtn: {
        borderRadius: "12px",
        backgroundColor: "#0cb",
        paddingVertical: "1.2rem",
        marginTop: "1rem"
    },
    footerBtnText: {
        color: "#fff",
        textAlign: "center",
        fontSize: "1.2rem",
        fontWeight: 700
    }
}

export default BasketScreen
