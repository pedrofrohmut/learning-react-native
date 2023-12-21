import { Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { XMarkIcon } from "react-native-heroicons/solid"

import CustomSafeAreaView from "../components/shared/CustomSafeAreaView"
import BackButton from "../components/shared/BackButton"
import { useNavigation } from "@react-navigation/native"

const dimensions = Dimensions.get("screen")

const SearchScreen = () => {
    const navigation = useNavigation()

    return (
        <ScrollView className="bg-neutral-900">
            <CustomSafeAreaView>
                <View className="flex-row px-4 py-3">
                    <BackButton navigation={navigation} />
                </View>

                <View className="flex-row border border-neutral-500 rounded-full mx-3">
                    {/* Search Input */}
                    <TextInput
                        placeholder="Search Movie"
                        placeholderTextColor="#888"
                        className="text-white rounded-full flex-1 pl-5 pb-1 text-lg"
                    />
                    {/* Clear Search Btn */}
                    <TouchableOpacity className="rounded-full p-3 m-1 bg-neutral-500">
                        <XMarkIcon size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </CustomSafeAreaView>
        </ScrollView>
    )
}

export default SearchScreen
