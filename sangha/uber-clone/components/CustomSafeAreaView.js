import { Platform, SafeAreaView, StatusBar } from "react-native"

const CustomSafeAreaView = ({ children, style }) => {
    return (
        <SafeAreaView
            style={{
                ...style,
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                flex: 1
            }}
        >
            {children}
        </SafeAreaView>
    )
}

export default CustomSafeAreaView
