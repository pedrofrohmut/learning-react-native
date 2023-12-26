import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native"

import { COLORS, MOVIE_NAME } from "../../shared/constants"
import { movieFmtd } from "../../shared/utils"
import { imageUri185 } from "../../api/moviedb"

const dimensions = Dimensions.get("screen")

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
                {data.map((item, index) => (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push("MovieScreen", item)}
                    >
                        <View className="mr-5">
                            <Image
                                source={{ uri: imageUri185(item.poster_path) || fallbackMoviePoster }}
                                className="rounded-3xl"
                                style={{
                                    width: dimensions.width * 0.33,
                                    height: dimensions.height * 0.22
                                }}
                            />
                            <Text className="text-neutral-400 text-center">
                                {movieFmtd(item.original_title)}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </View>
    )
}

export default MovieList
