import { Dimensions, Platform, ScrollView, TouchableOpacity, View } from "react-native"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import { COLORS } from "../constants"
import { ChevronLeftIcon, HeartIcon as EmptyHeartIcon } from "react-native-heroicons/outline"
import { HeartIcon as FullHeartIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const dimensions = Dimensions.get("screen")
const isIos = Platform.OS === "ios"

const PersonScreen = () => {
    const navigation = useNavigation()

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <ScrollView className="bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row items-center justify-between px-4 py-3">
                    <TouchableOpacity
                        style={{ backgroundColor: COLORS.primary }}
                        className="rounded-xl p-1"
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeftIcon size={28} strokeWidth={2} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                        {isFavorite && <FullHeartIcon size={35} color={COLORS.primary} />}
                        {!isFavorite && <EmptyHeartIcon size={35} color={COLORS.primary} />}
                    </TouchableOpacity>
                </View>
            </CustomSafeAreaView>
        </ScrollView>
    )
}

export default PersonScreen
