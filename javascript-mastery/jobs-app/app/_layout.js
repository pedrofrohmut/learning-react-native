import { Stack } from "expo-router"
import { useCallback } from "react"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DBBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DBMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DBRegular: require("../assets/fonts/DMSans-Regular.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null
    }

    return <Stack />
}

export default Layout
