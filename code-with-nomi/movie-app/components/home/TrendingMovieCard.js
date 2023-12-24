import { Image, TouchableWithoutFeedback } from "react-native"
import { imageUri500 } from "../../api/moviedb"

const TrendingMovieCard = ({ item, handlePress, device }) => (
    <TouchableWithoutFeedback onPress={() => handlePress(item)}>
        <Image
            source={{ uri: imageUri500(item.poster_path) }}
            style={{
                width: device.width * 0.6,
                height: device.height * 0.4
            }}
            className="rounded-3xl"
        />
    </TouchableWithoutFeedback>
)

export default TrendingMovieCard
