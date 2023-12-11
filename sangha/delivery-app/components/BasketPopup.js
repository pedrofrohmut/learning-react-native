import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"

import { useSelector } from "react-redux"
import { basketItemsSelector, basketTotalSelector } from "../redux/selectors/basketSelectors"

const BasketPopup = () => {
    const navigation = useNavigation()

    const items = useSelector(basketItemsSelector)
    const total = useSelector(basketTotalSelector)

    return (
        <View className="absolute bottom-5 w-full px-5">
            <TouchableOpacity
                onPress={() => navigation.navigate("BasketScreen")}
                className="flex-row items-center bg-[#0cb] px-3 py-2 rounded-lg"
            >
                <Text className="text-lg text-white bg-[#0003] py-1 px-3 rounded-lg font-bold">
                    {items.length}
                </Text>
                <Text className="flex-1 text-center text-lg text-gray-600">View Basket</Text>
                <Text className="text-lg text-white font-extrabold">
                    {"Total: "}
                    <Currency quantity={total} currency="GBP" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketPopup
