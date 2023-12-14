import { SafeAreaProvider } from "react-native-safe-area-context"

import { Provider } from "react-redux"
import store from "./redux/store"

import AppNavigation from "./components/AppNavigation"

const App = () => {
    return (
        // Redux store provider
        <Provider store={store}>
            {/* React Native Elements Safe Area Provider */}
            <SafeAreaProvider>
                {/* NavigationContainer and Stack */}
                <AppNavigation />
            </SafeAreaProvider>
        </Provider>
    )
}

export default App
