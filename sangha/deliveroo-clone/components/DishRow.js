import { useState } from "react"
import { Text, TouchableOpacity, View, Image } from "react-native"
import Currency from "react-currency-formatter"
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid"

import { urlFor } from "../sanity"

import { useDispatch, useSelector } from "react-redux"
import { addBasketItem, basketItemsSelector, removeBasketItem } from "../redux/slices/basketSlice"

const getAmount = (items, itemId) => {
    const item = items.find((item) => item.value.id === itemId)
    return item ? item.amount : 0
}

const DishRow = ({ id, name, shortDescription, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)

    const items = useSelector(basketItemsSelector)

    const dispatch = useDispatch()

    const addItemToBasket = () => {
        dispatch(addBasketItem({ id, name, shortDescription, price, image }))
    }

    const removeItemFromBasket = () => {
        dispatch(removeBasketItem(id))
    }

    console.log("items", items)

    return (
        <View style={css.outerContainer}>
            <TouchableOpacity onPress={() => setIsPressed(!isPressed)} style={css.dishContainer}>
                <View style={css.textContainer}>
                    <Text style={css.nameText}>{name}</Text>
                    <Text style={css.descriptionText}>{shortDescription}</Text>
                    <Text>
                        <Currency quantity={price} currency="GBP" />
                    </Text>
                </View>

                <Image
                    source={{
                        uri: image ? urlFor(image).url() : "https://links.papareact.com/gn7"
                    }}
                    style={css.image}
                />
            </TouchableOpacity>

            {isPressed && (
                <View>
                    <View style={css.amountContainer}>
                        <TouchableOpacity
                            onPress={removeItemFromBasket}
                            disabled={items.length === 0}
                        >
                            <MinusCircleIcon
                                size={35}
                                color="#00ccbb"
                                opacity={0.6}
                                style={items.length === 0 && css.disabledBtn}
                            />
                        </TouchableOpacity>

                        <Text style={css.amountText}>
                            {items.length === 0 ? 0 : getAmount(items, id)}
                        </Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon size={35} color="#00ccbb" opacity={0.6} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    )
}

const css = {
    outerContainer: {
        marginBottom: "0.7rem"
    },
    dishContainer: {
        backgroundColor: "#fff",
        padding: "0.8rem",
        flexDirection: "row"
    },
    textContainer: {
        flex: 1
    },
    nameText: {
        fontSize: "1.2rem",
        marginBottom: "0.8rem"
    },
    descriptionText: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "0.3rem"
    },
    image: {
        height: "5rem",
        width: "5rem",
        border: "2px solid #f3f3f3"
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.66rem",
        marginBottom: "0.4rem",
        paddingTop: "0.5rem"
    },
    amountText: {
        fontSize: "1.3rem",
        color: "#666"
    },
    disabledBtn: {
        color: "#888"
    }
}

export default DishRow
