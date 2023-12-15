const { SafeAreaView, Platform, StatusBar } = require("react-native")

const CustomSafeAreaView = ({ children, style }) => {
    return (
        <SafeAreaView
            style={{
                ...style,
                marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                flex: 1
            }}
        >
            {children}
        </SafeAreaView>
    )
}

export default CustomSafeAreaView
