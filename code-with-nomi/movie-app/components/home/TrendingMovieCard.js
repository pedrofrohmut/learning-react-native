import { Image, TouchableWithoutFeedback } from "react-native"

import { imageUri500 } from "../../api/moviedb"

const TrendingMovieCard = ({ movie, navigation, dimensions }) => (
    <TouchableWithoutFeedback
        onPress={() => {
            navigation.navigate("MovieScreen", movie)
        }}
    >
        <Image
            source={{ uri: imageUri500(movie.poster_path) }}
            style={{
                width: dimensions.width * 0.6,
                height: dimensions.height * 0.4
            }}
            className="rounded-3xl"
        />
    </TouchableWithoutFeedback>
)

export default TrendingMovieCard
