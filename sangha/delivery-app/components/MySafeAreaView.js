import { Platform, SafeAreaView, StatusBar } from "react-native"

const MySafeAreaView = ({ children }) => (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
        {children}
    </SafeAreaView>
)
export default MySafeAreaView
