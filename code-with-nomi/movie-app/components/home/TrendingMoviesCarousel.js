import { Dimensions, Text, View } from "react-native"
import Carousel from "react-native-snap-carousel"

import TrendingMovieCard from "./TrendingMovieCard"

const dimensions = Dimensions.get("window")

const TrendingMoviesCarousel = ({ movies, navigation }) => (
    <View className="my-3">
        <Text className="text-white text-xl px-4 mb-5">Trending</Text>
        <Carousel
            data={movies}
            renderItem={({ item }) => (
                <TrendingMovieCard movie={item} navigation={navigation} dimensions={dimensions} />
            )}
            firstItem={0}
            inactiveSlideOpacity={0.6}
            sliderWidth={dimensions.width}
            itemWidth={dimensions.width * 0.62}
            slideStyle={{ display: "flex", alignItems: "center" }}
        />
    </View>
)

export default TrendingMoviesCarousel
