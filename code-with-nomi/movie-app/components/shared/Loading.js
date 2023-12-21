import { Text, View, Dimensions } from "react-native"
import * as Progress from "react-native-progress"
import { COLORS } from "../../shared/constants"

const dimensions = Dimensions.get("screen")

const Loading = () => {
    return (
        <View
            style={{ height: dimensions.height, width: dimensions.width }}
            className="absolute justify-center items-center"
        >
            <Progress.CircleSnail thickness={12} size={160} color={COLORS.primary} />
            <Text className="mt-5 text-white text-lg">Loading...</Text>
        </View>
    )
}

export default Loading
