import { NavigationContainer } from "@react-navigation/native"

import NavigationStack from "./components/NavigationStack"
import CustomSafeAreaView from "./components/CustomSafeAreaView"
import { AuthProvider } from "./hooks/useAuth"

const App = () => {
    return (
        <CustomSafeAreaView>
            <NavigationContainer>
                <AuthProvider>
                    <NavigationStack />
                </AuthProvider>
            </NavigationContainer>
        </CustomSafeAreaView>
    )
}

export default App
