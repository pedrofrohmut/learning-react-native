import { View } from "react-native"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import Loading from "../components/shared/Loading"
import BackButton from "../components/shared/BackButton"

const LoadingScreen = ({ navigation }) => {
    return (
        <View className="flex-1 bg-neutral-900">
            <CustomSafeAreaView style={{ position: "relative" }}>
                <Loading />

                <View className="absolute top-3 left-3">
                    <BackButton navigation={navigation} />
                </View>
            </CustomSafeAreaView>
        </View>
    )
}

export default LoadingScreen
