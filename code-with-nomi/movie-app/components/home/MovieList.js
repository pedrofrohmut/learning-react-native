import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native"
import { COLORS } from "../../constants"
import { useNavigation } from "@react-navigation/native"

const movieName = "Ant-man and the Wasp: Quantumania"
const dimensions = Dimensions.get("screen")

const movieFmtd = (name) => (name.length > 14 ? name.slice(0, 14) + "..." : name)

const MovieList = ({ title, data, navigation, hideSeeAll }) => {
    return (
        <View className="my-3">
            <View className="flex-row items-center justify-between px-4 mb-5">
                <Text className="text-white text-xl">{title}</Text>
                {!hideSeeAll && (
                    <TouchableOpacity>
                        <Text style={{ color: COLORS.primary }} className="text-lg">
                            See all
                        </Text>
                    </TouchableOpacity>
                )}
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {data.map((item, idx) => (
                    <TouchableWithoutFeedback
                        onPress={() => navigation.push("MovieScreen", movieName)}
                    >
                        <View className="mr-5">
                            <Image
                                source={require("../../assets/images/moviePoster2.png")}
                                className="rounded-3xl"
                                style={{
                                    width: dimensions.width * 0.33,
                                    height: dimensions.height * 0.22
                                }}
                            />
                            <Text className="text-neutral-400">{movieFmtd(movieName)}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default MovieList
