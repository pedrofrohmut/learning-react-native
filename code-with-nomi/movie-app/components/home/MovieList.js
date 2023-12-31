import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native"

import { COLORS } from "../../shared/constants"
import { movieFmtd, strFmtBySize } from "../../shared/utils"
import { imageUri185 } from "../../api/moviedb"

const dimensions = Dimensions.get("screen")

const MovieList = ({ title, data, navigation, hideSeeAll }) => {
    return (
        <View className="my-3">
            <View className="flex-row items-center justify-between px-4 mb-5">
                <Text className="text-neutral-200 text-xl font-light">{title}</Text>
                {!hideSeeAll && (
                    <TouchableOpacity>
                        <Text style={{ color: COLORS.primary }} className="text-lg font-light">See all</Text>
                    </TouchableOpacity>
                )}
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator
                contentContainerStyle={{ paddingHorizontal: 14 }}
            >
                {data.map((movie, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push("MovieScreen", movie)}
                    >
                        <View className="flex-col items-center mx-1">
                            <Image
                                source={
                                    movie.poster_path
                                        ? { uri: imageUri185(movie.poster_path) }
                                        : require("../../assets/fallback-movie-poster.jpg")
                                }
                                className="rounded-2xl mb-1"
                                style={{
                                    width: dimensions.width * 0.33,
                                    height: dimensions.height * 0.22
                                }}
                            />
                            <Text className="text-neutral-400 text-sm text-center w-32">
                                {strFmtBySize(movie.title, 30)}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default MovieList
