import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <View className="flex-1 items-center justify-center bg-gray-200">
            <Text className="text-2xl">Hello, Navigation!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("ChatScreen")}
                className="bg-red-500 px-5 py-2 mt-5"
            >
                <Text className="text-white text-lg">Chat Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
                className="bg-green-500 px-5 py-2 mt-5"
            >
                <Text className="text-white text-lg">Login Screen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen
