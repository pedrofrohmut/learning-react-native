import { Dimensions, Text, View } from "react-native"
import Carousel from "react-native-snap-carousel"

import TrendingMovieCard from "./TrendingMovieCard"

const device = Dimensions.get("window")

const TrendingMoviesCarousel = ({ data, navigation }) => {
    const handlePress = (item) => {
        navigation.navigate("MovieScreen", item)
    }

    return (
        <View className="my-3">
            <Text className="text-white text-xl px-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({ item }) => (
                    <TrendingMovieCard item={item} handlePress={handlePress} device={device} />
                )}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                sliderWidth={device.width}
                itemWidth={device.width * 0.62}
                slideStyle={{ display: "flex", alignItems: "center" }}
            />
        </View>
    )
}

export default TrendingMoviesCarousel
