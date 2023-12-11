import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Provider } from "react-redux"
import store from "./redux/store"

import HomeScreen from "./screens/HomeScreen"
import RestaurantScreen from "./screens/RestaurantScreen"
import BasketScreen from "./screens/BasketScreen"

// Uncomment css imports for Expo Web
// import "./styles/main.css"
// import "./styles/output.css"

const Stack = createNativeStackNavigator()

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RestaurantScreen"
                        component={RestaurantScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="BasketScreen"
                        component={BasketScreen}
                        options={{ presentation: "modal", headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
