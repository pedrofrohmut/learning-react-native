import { StatusBar } from "expo-status-bar"

import AppNavigation from "./components/AppNavigation"

import { IS_OFFLINE } from "./shared/constants"

if (IS_OFFLINE) {
    console.log("APP_MODE: The app is running in OFFLINE mode")
} else {
    console.log("APP_MODE: The app is running in ONLINE mode")
}

const App = () => (
    <>
        <AppNavigation />
        <StatusBar style="light" />
    </>
)

export default App
