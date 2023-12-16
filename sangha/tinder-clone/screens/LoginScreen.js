import { Text, TouchableOpacity, View } from "react-native"
import useAuth from "../hooks/useAuth"

const LoginScreen = () => {
    const { signInWithGoogle } = useAuth()

    return (
        <View className="flex-1 items-center justify-center bg-gray-200">
            <Text className="text-lg text-green-500">Login Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    signInWithGoogle()
                        .then(() => console.log("Working..."))
                        .catch((err) => console.log("ERROR to log in", err))
                }}
                className="bg-green-500 py-2 px-5 mt-2"
            >
                <Text>Log in</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen
