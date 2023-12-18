import { Platform, SafeAreaView, StatusBar } from "react-native"

const CustomSafeAreaView = ({ children, style }) => (
    <SafeAreaView
        style={{
            ...style,
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            marginBottom: Platform.OS === "ios" ? "-0.5rem" : "0.75rem",
            flex: 1
        }}
    >
        {children}
    </SafeAreaView>
)

export default CustomSafeAreaView
