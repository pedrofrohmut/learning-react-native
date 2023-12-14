import { Image, View } from "react-native"

import { UBER_LOGO } from "../constants"
import CustomSafeAreaView from "../components/CustomSafeAreaView"
import NavOptions from "../components/NavOptions"

const HomeScreen = () => {
    return (
        <CustomSafeAreaView>
            <View className="p-5">
                <Image
                    source={{ uri: UBER_LOGO }}
                    className="h-24 w-24"
                    style={{ resizeMode: "contain" }}
                />
                <NavOptions />
            </View>
        </CustomSafeAreaView>
    )
}

export default HomeScreen
