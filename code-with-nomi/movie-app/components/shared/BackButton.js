import { Text, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../shared/constants"
import { ChevronLeftIcon } from "react-native-heroicons/solid"

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity className="flex-row items-center" onPress={() => navigation.goBack()}>
            <View style={{ backgroundColor: COLORS.primary }} className="rounded-xl p-1 mr-2">
                <ChevronLeftIcon size={23} strokeWidth={2} color="white" />
            </View>
            <Text style={{ color: COLORS.primary }} className="text-base">
                Back
            </Text>
        </TouchableOpacity>
    )
}

export default BackButton
