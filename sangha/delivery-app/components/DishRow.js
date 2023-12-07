import { Image, Text, TouchableOpacity, View } from "react-native"
import Currency from "react-currency-formatter"

const DishRow = ({ id, name, description, price, imageUrl }) => {
    return (
        <TouchableOpacity className="flex-row items-center bg-white border border-gray-300 shadow-md px-3 py-2 mx-2 mb-2">
            <View className="flex-1">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-500 mb-1">{description}</Text>
                <Text className="text-gray-500">
                    <Currency currency="GBP" quantity={price} />
                </Text>
            </View>

            <View>
                <Image
                    source={{ uri: imageUrl }}
                    style={{ borderWidth: 1, borderColor: "#e5e5e5" }}
                    className="h-20 w-20 bg-gray-300 p-4"
                />
            </View>
        </TouchableOpacity>
    )
}

export default DishRow
