import { Platform, SafeAreaView, StatusBar } from "react-native"

const ptForPlatform = { paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }

const MySafeAreaView = ({ children, style }) => (
    <SafeAreaView
        style={{
            ...style,
            ...ptForPlatform,
            flex: 1
        }}
    >
        {children}
    </SafeAreaView>
)
export default MySafeAreaView
