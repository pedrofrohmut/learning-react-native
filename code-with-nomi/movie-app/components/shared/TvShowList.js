import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native"
import { imageUri185 } from "../../api/moviedb"
import { strFmtBySize } from "../../shared/utils"

const dimensions = Dimensions.get("screen")

const TvShowList = ({ title, data, navigation, hideSeeAll }) => {
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
                {data.map((tvShow) => (
                    <TouchableWithoutFeedback
                        key={tvShow.id}
                        onPress={() => navigation.push("TvShowScreen", tvShow)}
                    >
                        <View className="mr-5">
                            <Image
                                source={
                                    tvShow.poster_path
                                        ? { uri: imageUri185(tvShow.poster_path) }
                                        : require("../../assets/fallback-movie-poster.jpg")
                                }
                                className="rounded-3xl"
                                style={{
                                    width: dimensions.width * 0.33,
                                    height: dimensions.height * 0.22
                                }}
                            />
                            <Text className="text-neutral-400 text-center">
                                {strFmtBySize(tvShow.name, 14)}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default TvShowList
