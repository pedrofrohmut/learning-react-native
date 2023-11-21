import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import BasketScreen from "./screens/BasketScreen"

import { Provider } from "react-redux"
import store from "./redux/store"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                    <Stack.Screen
                        name="Basket"
                        component={BasketScreen}
                        options={{ presentation: "modal", headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
