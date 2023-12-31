import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import MovieScreen from "../screens/MovieScreen"
import PersonScreen from "../screens/PersonScreen"
import TvShowScreen from "../screens/TvShowScreen"
import SearchScreen from "../screens/SearchScreen"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MovieScreen"
                    component={MovieScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PersonScreen"
                    component={PersonScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="TvScreen"
                    component={TvShowScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
