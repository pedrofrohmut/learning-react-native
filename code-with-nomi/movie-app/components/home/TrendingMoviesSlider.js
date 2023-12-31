import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native"
import { imageUri500 } from "../../api/moviedb"

const dimensions = Dimensions.get("screen")

const TrendingMoviesSlider = ({ movies, navigation }) => {
    return (
        <View className="my-3">
            <Text className="text-neutral-200 text-xl font-light pl-2 mb-5 mx-4 pb-3 border-b-2 border-neutral-200">
                Trending
            </Text>
            {/* <Text className="text-white text-2xl px-4 mb-5"> */}
            {/*     Trending */}
            {/* </Text> */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {movies.map((movie, index) => (
                    <View key={index} className="mx-3">
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("MovieScreen", movie)}>
                            <Image
                                source={
                                    movie.poster_path
                                        ? { uri: imageUri500(movie.poster_path) }
                                        : require("../../assets/fallback-movie-poster.jpg")
                                }
                                style={{
                                    width: dimensions.width * 0.8,
                                    height: dimensions.height * 0.6
                                }}
                                className="rounded-2xl"
                            />
                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default TrendingMoviesSlider
