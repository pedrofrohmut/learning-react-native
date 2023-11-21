import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"

import { useDispatch, useSelector } from "react-redux"
import { restaurantSelector } from "../redux/slices/restaurantSlice"
import { basketItemsSelector, removeBasketItem } from "../redux/slices/basketSlice"
import { XCircleIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import { urlFor } from "../sanity"

const BasketScreen = () => {
    const restaurant = useSelector(restaurantSelector)
    const items = useSelector(basketItemsSelector)

    const navigation = useNavigation()

    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <View style={css.header}>
                <Text style={css.headerText1}>Basket</Text>
                <Text style={css.headerText2}>{restaurant.title}</Text>

                <TouchableOpacity onPress={navigation.goBack} style={css.goBackBtn}>
                    <XCircleIcon color="#00ccbb" height={50} width={50} />
                </TouchableOpacity>
            </View>

            <View style={css.deliveryContainer}>
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    style={css.deliveryImage}
                />

                <Text style={css.deliveryText}>Deliver in 50 to 75 min</Text>

                <TouchableOpacity>
                    <Text style={css.changeText}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {items.map(item => (
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
        </SafeAreaView>
    )
}

const css = {
    header: {
        padding: "1rem",
        borderBottom: "1px solid #0cb",
        backgroundColor: "white",
        boxShadow: "0px 0px 7px #888",
    },
    headerText1: {
        textAlign: "center",
        fontWeight: 700,
        fontSize: "1.5rem",
    },
    headerText2: {
        fontSize: "1.2rem",
        textAlign: "center",
        color: "#666",
    },
    goBackBtn: {
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        position: "absolute",
        top: "0.8rem",
        right: "0.6rem",
    },
    deliveryContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: "0.75rem",
        paddingHorizontal: "1.25rem",
        backgroundColor: "#fff",
        marginVertical: "1.25rem",
        marginHorizontal: "1rem",
    },
    deliveryImage: {
        height: "1.8rem",
        width: "1.8rem",
        padding: "1rem",
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        marginRight: "0.5rem",
    },
    deliveryText: {
        flex: "1",
    },
    changeText: {
        color: "#0cb",
    },
    itemImage: {
        height: "2.5rem",
        width: "2.5rem",
        borderRadius: "50%",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: "0.5rem",
        paddingHorizontal: "2.5rem",
        marginHorizontal: "1rem",
        marginBottom: "1rem",
    },
    removeBtn: {
        fontSize: "0.8rem",
        color: "#0cb",
    }
}

export default BasketScreen
