import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import ChatScreen from "../screens/ChatScreen"
import LoginScreen from "../screens/LoginScreen"
import useAuth from "../hooks/useAuth"

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
    const { user } = useAuth()

    return (
        <Stack.Navigator>
            {user && (
                <>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen} />
                </>
            )}
            {!user && <Stack.Screen name="LoginScreen" component={LoginScreen} />}
        </Stack.Navigator>
    )
}

export default NavigationStack
