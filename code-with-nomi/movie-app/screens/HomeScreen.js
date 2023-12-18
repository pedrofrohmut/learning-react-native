import { Text, View } from "react-native"

import CustomSafeAreaView from "../components/CustomSafeAreaView"

const HomeScreen = () => {
    return (
        <View className="flex-1 bg-neutral-800">
            <CustomSafeAreaView>
                <Text className="text-white text-lg">Hello, World!</Text>
            </CustomSafeAreaView>
        </View>
    )
}

export default HomeScreen
